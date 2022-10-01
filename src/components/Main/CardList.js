import React from 'react';
import howl from '../../assets/howl.jpeg'
import castle from '../../assets/castle.jpeg';
import cat from '../../assets/cat.jpeg';
import delivery from '../../assets/delivery.jpeg';
import haku from '../../assets/haku.jpeg';
import lib from '../../assets/lib.jpeg';
import only from '../../assets/only.jpeg';
import ponyo from '../../assets/ponyo.jpeg';
import sho from '../../assets/sho.jpeg';
import wave from '../../assets/wave.jpeg';
import whisper from '../../assets/whisper.jpeg';
import wind from '../../assets/wind.jpeg';
import CardsGrid from './CardsGrid';

export default function CardList() {
    const CardList = [
        {
            title: "Howl's Moving Castle",
            year: '2004',
            genre: 'Adventure and Fantasy',
            quote: "A heart's a heavy burden",
            image: howl,
            price: '5$'
            
        },
        {   title:  'Castle in the Sky',
            year:   '1989',
            genre:  'Fictional Adventure',
            quote:  'The world cannot live without love',
            image: castle,
            price: '3$'

        },
        {
            title: 'The Cat Returns',
            year:   '2002',
            genre:  'Rom-Com',
            quote: 'Whenever someone creates something with all their heart, then that creation is given a soul',
            image: cat,
            price: '4$'
        },
        {   title: "Kiki's Delivery Service",
            year: '1989',
            genre: 'Animated Fantasy',
            quote: 'We can fly with our spirit',
            image: delivery,
            price: '7$,'

        },
        {  
            title: 'Spirited Away',
            year: '2001',
            genre: 'Cross of mythical creature',
            quote: "Once you've met someone you never really forget them",
            image: haku,
            price: '2$'

        },
        {
            title: 'From Up on Poppy Hill',
            year:   '2011',
            genre:  'Highschool Life',
            quote:  "There's no future for people who worship the future and forget the past",
            image: lib,
            price: '9$'
        },
        {
            title: 'Only Yesterday',
            year:  '1991',
            genre: 'Romance Drama',
            quote: "If today is no good, you'll have tomorrow",
            image: only,
            price: '8$'
            
        },
        {   title: 'Ponyo',
            year: '2008',
            genre: 'Fantasy Adventure',
            quote: "What's important is is that you're doing what you want",
            image: ponyo,
            price: '9$'

        },
        {
            title: 'Arrietty',
            year: '2010',
            genre: 'Fantasy Family',
            quote: "My heart is stronger now that you're in it",
            image: sho,
            price: '1$'
        },
        {   title: 'The Ocean Waves',
            year: '1993',
            genre: 'Romance Drama', 
            quote: "You're my best memory... Please do not fade",
            image: wave,
            price: '2$'

        },
        {  
            title: 'Whisper of the Heart',
            year: '1995',
            genre: 'Family Romance',
            quote: "There's always a voice inside me that says, Things won't go that smoothly",
            image: whisper,
            price: '4$'

        },
        {
            title: 'The Wind Rises',
            year: '2013',
            genre: 'War Romance',
            quote: "I'll keep holding your hand. You should sleep",
            image: wind,
            price: '12$'
        }
    ]

    return (
            <CardsGrid CardList={CardList} ></CardsGrid>  
            
    )
}
