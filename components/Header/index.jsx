import React, { useEffect,useState } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import servicePath from '../../config/apiUrl'

import './index.css'
import { Row, Col, Menu } from 'antd'
import { HomeOutlined } from '@ant-design/icons'
import * as Icons from '@ant-design/icons'

const Header = () => {
    const [ navArray, setnavArray ] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(servicePath.getTypeInfo).then(res => {
                // setnavArray(res.data.data)
                return res.data.data
            })
            setnavArray(result)
        }
        fetchData()
    },[])

    const handleClick = (e) => {
        if(e.key == 0) {
            Router.push('/')
        } else {
            Router.push('/list?id=' + e.key)
        }
    }


    return (
        <div className='header'>
        <Row type='flex' justify='center'>
            <Col xs={24} sm={24} md={11} lg={16} xl={10}>   
                <span className='header-logo'>
                    <Link href={{pathname:'/'}}>
                        <a>shine_zxh</a>
                    </Link>
                </span>
                <span className='header-text'>前端小白，正在不断探索前端世界，每天Get一个新知识</span>
            </Col>
            <Col xs={0} sm={0} md={13} lg={8} xl={8}>
                <Menu mode='horizontal' onClick={handleClick} className="menu">
                    <Menu.Item key='0'>
                        {/* <Icon type='home'/> */}
                        <HomeOutlined />
                        博客首页
                    </Menu.Item>
                    {
                        navArray.map(item => {
                            const TagIcon = Icons[item.icon]
                            return (
                                <Menu.Item key={item.Id}>
                                    {/* <Icon type={item.icon}/> */}
                                    <TagIcon />
                                    {item.typeName}
                                </Menu.Item>
                            )
                        })
                    }
                </Menu>
            </Col>
        </Row>
    </div>
    )
}

export default Header