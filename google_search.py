import re
import requests
from concurrent.futures import ThreadPoolExecutor  # 用于多线程并发请求
from lxml import etree  # 用于解析HTML
import subprocess  # 用于执行外部JS文件

def run_js_and_get_output(js_file_path):
    """
    执行指定的JS文件并返回输出结果
    :param js_file_path: JS文件路径
    :return: JS执行后的标准输出
    """
    # 使用node执行JS文件，捕获 stdout 和 stderr
    result = subprocess.run(
        ["node", js_file_path],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True  # 输出以文本形式返回（而非字节）
    )
    return result.stdout

class GoogleSearch:
    def __init__(self):
        """初始化Google搜索爬虫，设置请求头和JS模板"""
        # 请求头，模拟Chrome浏览器，用于绕过基础反爬
        self.headers = {
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'accept-language': 'zh-CN,zh;q=0.9',
            'cache-control': 'no-cache',
            'downlink': '10',
            'pragma': 'no-cache',
            'priority': 'u=0, i',
            'rtt': '50',
            'sec-ch-prefers-color-scheme': 'light',
            'sec-ch-ua': '"Google Chrome";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
            'sec-ch-ua-arch': '"arm"',
            'sec-ch-ua-bitness': '"64"',
            'sec-ch-ua-form-factors': '"Desktop"',
            'sec-ch-ua-full-version': '"141.0.7390.78"',
            'sec-ch-ua-full-version-list': '"Google Chrome";v="141.0.7390.78", "Not?A_Brand";v="8.0.0.0", "Chromium";v="141.0.7390.78"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"macOS"',
            'sec-ch-ua-platform-version': '"26.0.1"',
            'sec-ch-ua-wow64': '?0',
            'sec-fetch-dest': 'document',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-site': 'none',
            'sec-fetch-user': '?1',
            'upgrade-insecure-requests': '1',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
            'x-browser-channel': 'stable',
            'x-browser-copyright': 'Copyright 2025 Google LLC. All rights reserved.',
            'x-browser-validation': 'qSH0RgPhYS+tEktJTy2ahvLDO9s=',
            'x-browser-year': '2025',
            'x-client-data': 'CJW2yQEIpbbJAQipncoBCIyLywEIlqHLAQiwpMsBCIagzQEI6eTOAQiqhc8BCNSIzwEIy4vPAQiWjM8BCI6OzwEI7o7PARiYiM8BGNmOzwE=',
        }
        # 读取JS模板文件（用于生成需要执行的JS代码，处理Google的反爬验证）
        self.template = open('./JS_file/template.js', 'r').read()

    def first_request(self, keyword):
        """
        首次请求Google搜索页面，获取必要的验证信息（eid）和Cookie
        :param keyword: 搜索关键词
        :return: eid（Google的验证标识）和处理后的Cookie字典
        """
        params = {
            'q': keyword,  # 搜索关键词参数
        }
        # 循环请求直到成功（处理网络波动）
        while True:
            try:
                # 发送首次请求，获取初始页面内容
                response = requests.get('https://www.google.com/search', params=params, headers=self.headers)
                break
            except:
                continue  # 失败则重试
        # 解析HTML
        tree = etree.HTML(response.text)
        # 提取页面中的Cookie
        cookies = response.cookies
        # 提取页面中的所有script标签内容（用于后续生成验证JS）
        scripts = tree.xpath('//script/text()')
        # 从页面中提取eid（Google用于后续请求验证的标识）
        eid = re.findall("eid='(.*?)'", response.text)[0]
        # 处理script内容，用于生成可执行的JS（修改函数定义避免冲突）
        script_1 = scripts[2].replace("(function(){var", "!(function(){var")
        # 处理第二个script，添加console.log输出关键参数（用于获取SG_SS Cookie）
        script_2 = '!'+scripts[3].replace('a=ea();X("bset");', 'a=ea();console.log(a);X("bset");')
        # 将模板JS和处理后的script写入临时JS文件
        with open('./JS_file/JS_file.js', 'w', encoding='utf-8') as f:
            f.write(self.template + '\n' + script_1 + '\n' + script_2)
        # 转换cookies为字典格式
        cookies = dict(cookies)
        # 执行生成的JS文件，获取SG_SS Cookie值（用于通过Google的反爬验证）
        SG_SS = run_js_and_get_output('./JS_file/JS_file.js').replace('\n', '')
        cookies['SG_SS'] = SG_SS
        return eid, cookies

    def request(self, keyword, page, eid, cookies):
        """
        发送分页搜索请求，获取指定页的HTML内容
        :param keyword: 搜索关键词
        :param page: 页码
        :param eid: 首次请求获取的验证标识
        :param cookies: 处理后的Cookie字典
        :return: 页面HTML文本
        """
        params = {
            'q': keyword,
            'start': str((page-1)*10),  # 分页参数（每页10条结果，start=0为第1页，start=10为第2页等）
            'sei': eid,  # 验证标识，用于通过反爬
        }
        # 发送带Cookie和验证参数的请求
        response = requests.get('https://www.google.com/search', params=params, headers=self.headers, cookies=cookies)
        response.encoding = 'utf-8'  # 确保编码正确
        return response.text

    def parse(self, html):
        """
        解析搜索结果HTML，提取链接
        :param html: 搜索结果页面HTML
        :return: 提取的结果链接列表
        """
        tree = etree.HTML(html)
        # 定位搜索结果容器（Google搜索结果的class可能随版本变化，需要注意维护）
        results = tree.xpath('//div[@class="MjjYud"]')
        links = []
        for result in results:
            # 提取每个结果中的链接
            link = result.xpath('.//a/@href')[0]
            links.append(link)
        return links

    def main(self, keyword, start_page=1, end_page=10):
        """
        主函数：协调请求、解析和结果保存
        :param keyword: 搜索关键词（支持Google搜索语法，如filetype:pdf）
        :param start_page: 起始页码
        :param end_page: 结束页码
        """
        # 首次请求获取验证信息和Cookie
        eid, cookies = self.first_request(keyword)
        futures = []
        # 使用多线程并发请求多页结果（提高效率）
        with ThreadPoolExecutor(max_workers=10) as executor:
            for page in range(start_page, end_page + 1):
                # 提交分页请求任务
                future = executor.submit(self.request, keyword, page, eid, cookies)
                futures.append(future)
        # 保存结果到文件
        with open('./google_search_results.txt', 'w') as file:
            for future in futures:
                # 获取每个分页的HTML结果
                html = future.result()
                # 解析链接
                links = self.parse(html)
                # 写入文件
                for link in links:
                    file.write(link + '\n')

if __name__ == '__main__':
    # 示例：搜索"人工智能 filetype:pdf"，爬取1-10页结果
    gs = GoogleSearch()
    gs.main('人工智能 filetype:pdf', start_page=1, end_page=10)