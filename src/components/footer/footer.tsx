import React from 'react';
import {Footer, Phrases, SnsBtn, SnsBtnLink} from './footerElements'
import {IoLogoGithub,IoMdMail} from "react-icons/io";
import { ImBlog } from "react-icons/im";


export default function footer() {
    const year: number = new Date().getFullYear();
    return (
        <Footer>
            <Phrases>
                Copyright © {year}. Cozak All Rights Reserved.
            </Phrases>
            <SnsBtn>
                <SnsBtnLink href="https://github.com/Cozak92" target="_blank">
                    <IoLogoGithub/>
                </SnsBtnLink>
                <SnsBtnLink href="mailto:cozak92@gmail.com">
                    <IoMdMail/>
                </SnsBtnLink>
                <SnsBtnLink href="https://velog.io/@roo333" target="_blank">
                    <ImBlog/>
                </SnsBtnLink>
            </SnsBtn>
        </Footer>
    );
}