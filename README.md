# Google Search Scraper

一个爬取Google搜索结果链接的工具，支持多页爬取和自定义关键词（可使用Google搜索语法如`filetype:pdf`）。


## 依赖项

- **Python 3.x**
- Python库：`requests`（网络请求）、`lxml`（HTML解析）
- **Node.js**（执行JS脚本处理反爬验证，需单独安装）


## 快速运行

1. **安装依赖**  
   ```bash
   # 安装Python库
   pip install requests lxml
   # 安装Node.js（用于执行JS）
   # 下载地址：https://nodejs.org/，安装后验证：node -v
   ```

2. **准备JS环境**  
   - 项目根目录创建`JS_file`文件夹  
   - 文件夹内添加`template.js`（用于模拟浏览器环境，支持反爬验证逻辑）

3. **修改参数并运行**  
   - 打开`google_search.py`，在底部修改搜索关键词和页码范围：  
     ```python
     gs.main('关键词', start_page=1, end_page=10)  # 示例：爬取1-10页结果
     ```
   - 运行脚本：  
     ```bash
     python google_search.py
     ```

4. **查看结果**  
   爬取的链接会保存到`google_search_results.txt`


## 反爬解决与实现

Google有严格的反爬机制，本工具通过以下方式处理：

1. **模拟浏览器请求**  
   配置完整的Chrome浏览器请求头（包含`user-agent`、`sec-ch-*`等标识），降低被识别为爬虫的概率。

2. **动态生成验证Cookie**  
   - 首次请求获取页面中的`eid`（验证标识）和初始Cookie  
   - 提取页面中的JS脚本，通过模板处理后生成临时JS文件  
   - 用Node.js执行临时JS，生成`SG_SS`等关键验证Cookie，用于后续请求

3. **携带验证参数**  
   分页请求时携带`eid`（验证标识）和动态生成的Cookie，通过Google的反爬校验。


## 注意事项

- 频繁请求可能导致IP被临时封禁，建议控制爬取频率  
- Google页面结构可能更新，若爬取失败需检查`parse`方法中的XPath表达式（如结果容器class）  
- 遵守Google使用条款，仅用于合法用途