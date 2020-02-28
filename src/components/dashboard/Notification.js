import React, { Component } from 'react'
import moment from 'moment';

export default class Notification extends Component {
    render() {
        const { notifications } =this.props;
        return (
            <div className="section">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">Notifications</span>
                        <ul className="notifications">
                            { notifications && notifications.notifications.map(item => {
                                let time = moment(parseInt(item.createdAt)).calendar()
                                return (
                                    <li key={item.id}>
                                        <span className="pink-text">{item.user.firstName} {item.user.lastName}</span>
                                        <span> {item.title}</span>
                                        <div className="grey-text note-date">
                                            {time}
                                        </div>
                                    </li>
                                )
                            }) }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
