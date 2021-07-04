/* 
    详情页
*/

import Head from 'next/head'
import Router from 'next/router'
// import Image from 'next/image'
import { Row, Col, Breadcrumb, Affix} from 'antd'
import { CalendarOutlined, FolderOutlined, FireOutlined } from '@ant-design/icons'

import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'

// import ReactMarkdown from 'react-markdown'
// import MarkNav from 'markdown-navbar'
import axios from 'axios'
import marked from 'marked'     //解析markdown代码
import hljs from 'highlight.js' //让代码高亮
import 'highlight.js/styles/monokai-sublime.css'

import Tocify from '../components/tocify.tsx'

import styles from '../styles/Home.module.css'
import 'markdown-navbar/dist/navbar.css'
import '../styles/pages/detailed.css'

import servicePath from '../config/apiUrl'

export default function Detailed(props) {
  
  const renderer = new marked.Renderer()
  const tocify = new Tocify()
  // ### zxh
  renderer.heading = function(text, level, raw) {
      const anchor = tocify.add(text, level);
      return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
    };

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false, //容错处理
    sanitize: false, //
    tables: true,
    breaks: false,
    smartLists: true,
    // highlight: function(code) {
    //   return hljs.highlightAuto(code).value
    // }
    highlight: function(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    },
  })

  let html = marked(props.article_content)
  let id = props.typeId
  let hrefs = '/list?id='+id

  return (
    // <div className={styles.container}>
    <div>
      <Head>
        <title>zhangxianhong | 详情页</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* 头部区 */}
      <Header/>
      
      {/* 页面主区-Main */}
      <Row className='comm-main' type='flex' justify='center'>
          <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14}>
            <div>
              <div className="bread-div">
                <Breadcrumb>
                  <Breadcrumb.Item>
                    <a href="/">首页</a>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <a href={hrefs}>{props.typeName}</a>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <a>{props.title}</a>
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <div>
                <div className="detailed-title">
                  {/* React实战视频教程-张献洪Blog开发（学习到第10集） */}
                  {props.title}
                </div>
                <div className="list-icon center">
                  <span><CalendarOutlined />{props.addTime}</span>
                  <span><FolderOutlined />{props.typeName} </span>
                  <span><FireOutlined />{props.view_count}</span>
                </div>
                <div className="detailed-content" dangerouslySetInnerHTML={{__html:html}}>
                  {/* <ReactMarkdown children={markdown} escapeHtml={false}></ReactMarkdown> */}
                </div>
              </div>
            </div>
          </Col>
          
          {/* 右侧作者和广告及目录区 */}
          <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4}>
            <Author/>
            <Advert/>
            {/* 右侧文章目录区（使用固订） */}
            <Affix offsetTop={5}>
              <div className="detailed-nav comm-box">
                <div className="nav-title">文章目录</div>
                {/* <MarkNav className="article-menu" source={html} ordered={false} /> */}
                {tocify && tocify.render()}
              </div>
            </Affix>
          </Col>
      </Row>
      
      {/* 底部Footer区 */}
      <Footer/>
    </div>
  )
}

Detailed.getInitialProps = async(context) => {
  console.log(context.query.id)
  let id = context.query.id
  const promise = new Promise((resolve,reject) => {
    axios(servicePath.getArticleById+id).then(res => {
      console.log(res.data.data[0])
      resolve(res.data.data[0])
    })
  })
  return await promise
}