'use client'

import Container from "@/components/Container/Container";
import GifCard from "@/components/GifCard/GifCardMedium";
import { palette } from "@/styles/palette";
import styled from "styled-components";
import SearchBar from "./gif/Search/SearchBar";
import GIfCardSmall from "@/components/GifCard/GifCardSmall";
import { useEffect, useState } from "react";
import { IGif } from "@/models/IGif";
import Layout from "react-masonry-list";
import Loader from "@/components/Loader/Loader";
import GifCardHOC from "@/components/GifCard/GifCardHOC";

export default function Home() {

  const [gifs, setGifs] = useState<IGif[]>([]);
  const [page, setPage] = useState(0);
  const [isEndScroll, setIsEndScroll] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const scrollHandler = (e: any) => {
    if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop - window.innerHeight) < 1407){
      setIsEndScroll(true);
    }
    console.log(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop - window.innerHeight))

  }

  useEffect(() => {
    if(isEndScroll && page < 10 && !isLoading){
      setIsLoading(true);
      fetch(`https://api.giphy.com/v1/gifs/trending?api_key=POGUl80ahoJ570t8zeTaHqAQawZ4F8RC&limit=25&offset=${page*25}&rating=g&bundle=messaging_non_clips`)
        .then(res => res.json())
          .then(res => {
            setGifs([...gifs, ...res.data]);
            setPage(pv => pv + 1);
            setIsEndScroll(false);
            setIsLoading(false);
          })
    }
  }, [isEndScroll])

  useEffect(() => {
    addEventListener('scroll', scrollHandler);

    return () => {
      removeEventListener('scroll', scrollHandler);
    }
  }, [])

  const [selectedSize, setSelectedSize] = useState<'small' | 'medium' | 'large'>('small');

  return (
    <Main>
      <Container>
        <MainInner>
          <SearchBar
            onChangeSize={(size: 'small' | 'medium' | 'large') => setSelectedSize(size)} />
          <Masonry 
            colCount={5}
            gap={20}
            items={gifs.map(gif => 
              <GifCardHOC 
                key={gif.id} 
                size={selectedSize}
                title={gif.title}
                id={gif.id} /> )} />

        </MainInner>
        {
          page < 10
            && <Loader />
        }
      </Container>
    </Main>
  );
}

const Masonry = styled(Layout)`
  margin: 0;
  padding: 0;

  grid-template-columns: repeat(5, minmax(100px, 1fr)) !important;
`

// const GifList = styled.div`
//     display: grid;
//     grid-template-columns: repeat(5, 1fr);
//     grid-template-rows: masonry;
//     justify-tracks: endnpm install react-masonry-list --save;
//     grid-auto-flow: dense;
//     grid-gap: 10px;
// `

const MainInner = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
`

const Main = styled.main`
  height: 100vh;
  color: ${palette.textColor};
  display: flex;
  flex-direction: column;
  align-items: center;

`