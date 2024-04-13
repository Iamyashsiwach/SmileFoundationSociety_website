'use client'
import React from 'react'
import { fstore, storage, db } from '@/app/firebase/config'
import { ref, uploadBytes } from 'firebase/storage'
import { setDoc, doc } from 'firebase/firestore'

function page() {
    // async function getData(formData) {
    //     'use server'
    //     console.log(formData);
    //     const title = formData.get('title')
    //     const content = formData.get('content')
    //     const date = formData.get('date')
    //     const img = formData.get('img')
    //     // const img = document.getElementById(img).value
    //     let convDate = date.replaceAll('-', '_')
    //     const folderRef = ref(storage, `Test/${convDate}`)
    //     let imgUrls = []
    //     console.log(img);
    //     console.log(typeof (img));
    //     // await Promise.all(img.map(async (item) => {
    //     //     let itemRef = ref(storage, `${folderRef}/${item.name}`)
    //     //     // console.log(item);
    //     //     console.log(typeof (item));
    //     //     // await uploadBytes(itemRef, item)
    //     //     // imgUrls.push(`https://firebasestorage.googleapis.com/v0/b/smile-2168a.appspot.com/o/Test%2F${folderRef.name}%2F${item.name}?alt=media`);
    //     //     imgUrls.push(`https://firebasestorage.googleapis.com/v0/b/smilefoundation-93974.appspot.com/o/Test%2F${folderRef.name}%2F${item.name}?alt=media`);
    //     //     console.log(`uploaded ${item.name} at ${folderRef.name}`);
    //     // }));
    //     // console.log(imgUrls);
    //     // console.log(img[0].name);
    //     // await setDoc(doc(fstore, 'events', convDate), {
    //     //     title: title,
    //     //     content: content,
    //     //     date: convDate,
    //     //     img: imgUrls
    //     // })

    // }
    return (
        <>
            <form onSubmit={async (e) => {
                e.preventDefault()
                // console.log(formData);
                const title = e.target.title.value
                const content = e.target.content.value
                const date = e.target.date.value
                const img = e.target.img.files
                // const img = document.getElementById(img).value
                let convDate = date.replaceAll('-', '_')
                const folderRef = ref(storage, `Test/${convDate}`)
                let imgUrls = []
                console.log(img);
                console.log(typeof (img));
                for (let index = 0; index < img.length; index++) {
                    const item = img[index];
                    let itemRef = ref(storage, `${folderRef}/${item.name}`)
                    console.log(item);
                    await uploadBytes(itemRef, item)
                    // imgUrls.push(`https://firebasestorage.googleapis.com/v0/b/smilefoundation-93974.appspot.com/o/Test%2F${folderRef.name}%2F${item.name}?alt=media`);
                    imgUrls.push(`https://firebasestorage.googleapis.com/v0/b/smile-2168a.appspot.com/o/Test%2F${folderRef.name}%2F${item.name}?alt=media`);

                    console.log(`uploaded ${item.name} at ${folderRef.name}`);
                }
                // await Promise.all(img.forEach(async (item) => {
                //     let itemRef = ref(storage, `${folderRef}/${item.name}`)

                //     // console.log(item);
                //     console.log(typeof (item));
                //     // await uploadBytes(itemRef, item)
                //     // imgUrls.push(`https://firebasestorage.googleapis.com/v0/b/smile-2168a.appspot.com/o/Test%2F${folderRef.name}%2F${item.name}?alt=media`);
                //     imgUrls.push(`https://firebasestorage.googleapis.com/v0/b/smilefoundation-93974.appspot.com/o/Test%2F${folderRef.name}%2F${item.name}?alt=media`);
                //     console.log(`uploaded ${item.name} at ${folderRef.name}`);
                // }));
                console.log(imgUrls);
                console.log(img[0].name);
                await setDoc(doc(fstore, 'events', convDate), {
                    title: title,
                    content: content,
                    date: convDate,
                    img: imgUrls
                })
            }}>
                <input className='border' type="text" name='title' />
                <input className='border' type="text" name='content' />
                <input className='border' type="date" name='date' />
                <input className='border' type="file" name="img" id="img" multiple />
                <button type='submit'>submit</button>
            </form >
        </>
    )
}

export default page