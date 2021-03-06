import React, { useState,useEffect } from 'react'
import './App.css'
import './style.css'

export default function AllBookingsItem ({ item, token, onClickDelete }) {

    return (
        <div className="booking-item">
            <label><b>{item.item.name}</b></label>
            <div className="bi-flex">
                <label>from {item.startDateTime} </label>
                <label>to {item.endDateTime}</label>
            </div>
            <button className="delete-button" onClick={() => onClickDelete(token, item.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="25" viewBox="0 0 22 25">
            <g id="Group_19" data-name="Group 19" transform="translate(-282.5 -37.5)">
                <line id="Line_4" data-name="Line 4" x2="20" transform="translate(283.5 41.5)" fill="none" stroke="#e4e4e4" stroke-linecap="round" stroke-width="2"/>
                <line id="Line_5" data-name="Line 5" y1="3" transform="translate(290.5 38.5)" fill="none" stroke="#e4e4e4" stroke-linecap="round" stroke-width="2"/>
                <line id="Line_6" data-name="Line 6" y2="20" transform="translate(285.5 41.5)" fill="none" stroke="#e4e4e4" stroke-linecap="round" stroke-width="2"/>
                <line id="Line_7" data-name="Line 7" y1="20" transform="translate(301.5 41.5)" fill="none" stroke="#e4e4e4" stroke-linecap="round" stroke-width="2"/>
                <line id="Line_8" data-name="Line 8" x2="16" transform="translate(285.5 61.5)" fill="none" stroke="#e4e4e4" stroke-linecap="round" stroke-width="2"/>
                <line id="Line_9" data-name="Line 9" y2="14" transform="translate(293.5 44.5)" fill="none" stroke="#e4e4e4" stroke-linecap="round" stroke-width="2"/>
                <line id="Line_10" data-name="Line 10" y2="14" transform="translate(297.5 44.5)" fill="none" stroke="#e4e4e4" stroke-linecap="round" stroke-width="2"/>
                <line id="Line_11" data-name="Line 11" y2="14" transform="translate(289.5 44.5)" fill="none" stroke="#e4e4e4" stroke-linecap="round" stroke-width="2"/>
                <line id="Line_12" data-name="Line 12" y1="3" transform="translate(296.5 38.5)" fill="none" stroke="#e4e4e4" stroke-linecap="round" stroke-width="2"/>
                <path id="Path_10" data-name="Path 10" d="M0,0H6" transform="translate(290.5 38.5)" fill="none" stroke="#e4e4e4" stroke-linecap="round" stroke-width="2"/>
            </g>
            </svg>
            </button>
        </div>
    ) 
}
