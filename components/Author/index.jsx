import { Avatar, Divider, Tag } from 'antd'
import { GithubOutlined, QqOutlined, WechatOutlined, SyncOutlined, ClockCircleOutlined, EnvironmentOutlined, MailOutlined } from '@ant-design/icons'
import React from 'react'
import './index.css'

export default function Author() {

    /* const [selftext,setSelftext] = React.useState()
    React.useEffect(() => {
        var msg = "前端入门小白，坚持每天学习，坚信勤能补拙，希望通过不断努力去达到心中所想，不负热爱，不负青春。"
            var seq = 0
            var speed = 350
            const play = () => {
                setSelftext(msg.substring(0,seq))
                if(seq > msg.length) {
                    seq = 0
                    setTimeout(play,speed*10)
                }
                else {
                    seq++
                    setTimeout(play,speed)
                }
            }
            play()
            return () => {
                clearTimeout(play)
            }
    },[]) */

    return (
        <div className="author-div comm-box">
            <div>
                <Avatar size={100} src="https://picsum.photos/id/1035/300/300" />
            </div>
            <div className="author-introduction">
                <div id="selfintroduce">
                    {/* {selftext} */}
                    前端入门小白，坚持每天学习，坚信勤能补拙，希望通过不断努力去达到心中所想，不负热爱，不负青春。
                </div>
                <div className="self-location">
                    <div><EnvironmentOutlined />四川-自贡</div>
                    <div><MailOutlined />shine_zxh@qq.com</div>
                </div>
                <div className="author-tag">
                    <Tag color="success">前端小白</Tag>
                    <Tag color="processing" icon={<SyncOutlined spin />}>追梦少年</Tag>
                    <Tag color="warning" icon={<ClockCircleOutlined />}>软件工程</Tag>
                    <Tag color="error">技术菜</Tag>
                </div>
                <Divider>社交账号</Divider>
                <div className="avater-github">
                    <a href="https://github.com/zhang-xianhong" target="_blank">
                        <Avatar size={28} icon={<GithubOutlined />} className="account"  />
                    </a>
                    <div className="github">https://github.com/zhang-xianhong</div>
                </div>
                <div className="avater-qq">
                    <Avatar size={28} icon={<QqOutlined />}  className="account" />
                    <div className="qq">QQ:2321809064</div>
                </div>
                <div className="avater-wechat">
                    <Avatar size={28} icon={<WechatOutlined />}  className="account" />
                    <div className="wechat">wechat:x2321809064</div>
                </div>
                {/* <Avatar size={28} icon="wechat"  className="account"  /> 老版本写法 */}
            </div>
        </div>
    )
}
