'use client'
import React, { useEffect } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import { fstore } from '@/app/firebase/config'
function page() {
    const [value, loading, error] = useCollection(collection(fstore, 'events'));
    // function getData() {
    // }
    // useEffect(() => {
    //     getData()
    // }, [])
    return (
        <div>
            {loading && <span>Collection: Loading...</span>}
            {value && (
                value.docs.map((item, idx) => {
                    return <div key={idx}>
                        <h1>title: {item.data().title}</h1>
                        <p>content: {item.data().content}</p>
                        <p>date: {item.data().date}</p>
                        {
                            item.data().img.map((item, idx) => {
                                return <img src={item} alt="img" />
                            })
                        }
                    </div>
                })
            )}
        </div>
    )
}

export default page