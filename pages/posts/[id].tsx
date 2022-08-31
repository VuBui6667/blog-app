import React, { useState, useEffect, useRef, SetStateAction } from 'react'
import { useRouter } from 'next/router'
import NotesAPI from '../../redux/sagas/api/NotesAPI';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType  } from 'next'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { useDispatch } from 'react-redux';
import { toggleTrue } from '../../redux/actions/toggleSidebar/toggle';
import { BsArrowBarRight } from "react-icons/bs"
import { GiNotebook } from "react-icons/gi"
import { fetchNotesRequest } from '../../redux/actions/notes/getNotes';

export interface INote {
    [x: string]: any;
    createdAt?: Date;
    title: string;
    body: string;
    id: string;
}

// export const getStaticPaths: GetStaticPaths = async () => {
//     const res = await fetch("https://625c3c0ac9e78a8cb9b59b2d.mockapi.io/api/page")
//     const data = await res.json()
//     const paths = data.map((note: any) => {
//         return {
//             params: {id: note.id.toString()}
//         }
//     })
//     return {
//         paths,
//         fallback: false
//     }
// }

// export const getStaticProps: GetStaticProps = async () => {
//     const res = await fetch("https://625c3c0ac9e78a8cb9b59b2d.mockapi.io/api/page/")
//     const data = await res.json()
//     return {
//         props: {data}
//     }
// }

// export const getServerSideProps = async () => {
//     const response = await NotesAPI.getAll()
//     return {
//         props: {response: (response as unknown as INote[]) },
//     }
//   }


const Pages = () : JSX.Element => {
    const toggle = useSelector((state: RootState) => state.toggleReducer.toggle)
    const dispatch = useDispatch()
    const notes = useSelector((state: RootState) => state.notesReducer.getNotesReducer.notes)
    const router = useRouter()
    const id  = router.query.id
    const refTitle = useRef<HTMLDivElement>(null)
    const [title, setTitle] = useState<string>()
    const [content, setContent] = useState<string>()
    const refContent = useRef<HTMLDivElement>(null)
    const [note, setNote] = useState<INote>()
    useEffect(() => {
        notes.map((note: INote) => {
            if(note.id === id) {
                setTitle(note.title)
                setContent(note.body)
                setNote(note)
            }
        })
    }, [id, notes])
    
    // useEffect(() => {
    //     setTitle(refText.current?.outerText as SetStateAction<undefined>)
    //     // const res = NotesAPI.put("1", title as unknown as string)
    //     console.log(title);
    // }, [id, title])
    const handleContent = () => {
        setContent(refContent.current?.innerText)
        console.log(content);
    }

    const handleTitle = () => {
        setTitle(refTitle.current?.innerText)
    }

    useEffect(() => {
        if(note) {  
            const updateNote = async () => {
                const res = await NotesAPI.put(parseInt(note.id), {
                    title: title,
                    body: content,
                })
                console.log(res);
                dispatch(fetchNotesRequest())
            }
            updateNote()
        }
    }, [title, content])

    return (
        <>
        {note &&
        <>
        <Head>
            <title>{note && note.title}</title>
        </Head>
        <BsArrowBarRight onClick={() => dispatch(toggleTrue())} className="open-sidebar" style={{display: toggle ? "none" : "block"}}/>
        <div className="container-page" style={{width: toggle ? "82vw" : "100vw"}}>
            <div className="header-page">
                <div className="main-title"><GiNotebook style={{marginRight: "5px"}}/> {title}</div>
            </div>
            <div className="contain-page">
                <div className="title-page" contentEditable ref={refTitle} onBlur={() => handleTitle()}>{title}</div>  
                <div style={{height: "50px"}}></div>
                <div className="content-page" contentEditable ref={refContent} onBlur={() => handleContent()}>{content}</div>
            </div>
        </div>
        </>
        }
        </>
    )
}

export default Pages
