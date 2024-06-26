import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    paintings:[
        {
        name:"mountains",
        image:"https://static.displate.com/324x454/displate/2023-01-24/42520f2a095c105ca082d658ac1c8ddb_98a9642ac6c8c52c8369cde4d077929d.avif",
        description:"Mountain landscape scenery",
        price:119,
        category:"landscapes"
        },
        
        {
            name:"waterfall",
            image:"https://static.displate.com/324x454/displate/2023-05-04/81132145500af6f8becd6f91b3f5503f_6c8af41805fa2a046758a3ff5957160d.avif",
            description:"Waterfall that flows down from a rocky cliffs under cloudy skies.",
            price:69,
            category:"landscapes"
            },
        {
            name:"forest",
            image:"https://static.displate.com/324x454/displate/2020-09-05/949e49c8a1b0570f35c2f9cdd54efd6f_e641ec897dba96754d6a1d4da0cb9e20.avif",
            description:"North Yorkshire Forest, England",
            price:49,
            category:"landscapes"
            },
            {
                name:"nordic lights",
                image:"https://static.displate.com/280x392/displate/2021-09-10/28053128158139c4c5300f357db6eb8a_c2e806bea50cf2ac4e7bec875373f195.jpg",
                description:"Nordic Lights starry sky",
                price:89,
                category:"landscapes"
                },
        {
            name:"call of duty",
            image:"https://static.displate.com/324x454/displate/2022-11-08/e252eedeef1fbc5fccf6d7abd8969c49_e8370c4254e9411e6b83c16b63eae96d.avif",
            description:"call of duty black ops 2 operaters",
            price:49,
            category:"gaming"
            },
        {
            name:"the witcher",
            image:"https://static.displate.com/324x454/displate/2019-04-25/5d85dab46c3fbf8bc63009f931a0c212_2b6dde4ff86195d5facdc2929abe5d7b.avif",
            description:"wold medallion from the witcher game series",
            price:144,
            category:"gaming"
            },   
        {
            name:"DOOM",
            image:"https://static.displate.com/324x454/displate/2021-04-21/6a55be7a3988393c0045b5818974d935_ac71113953a9f28fd4fbd26fadd6a038.avif",
            description:"the doom slayer,protaganist from the DOOM eternal game",
            price:59,
            category:"gaming"
            },
            {
                name:"fallout",
                image:"https://static.displate.com/280x392/displate/2023-09-11/011bda86019028c2038357e430b3774e_34765cf8f7b1aef67c073445214bd9fe.jpg",
                description:"Courier Helmet Graffiti",
                price:59,
                category:"gaming"
                },  
                 
        {
            name:"arsenal",
            image:"https://static.displate.com/280x392/displate/2020-07-21/602cce304cdceeb3318993ccde493e2d_f19554651269177c901e6efcbc19efc2.jpg",
            description:"Official Licensed high-quality metal print featuring the current club crest in gold",
            price:49,
            category:"sport teams"
            },
            
        {
            name:"FC Barcelona",
            image:"https://static.displate.com/280x392/displate/2021-07-29/57dfb9c7762d22d8ef09cb421e8d7b26_2bccd687e6ff79e91aa8631557a5f600.jpg",
            description:"This stunning digital artwork showcases the emblem of a renowned football club. ",
            price:49,
            category:"sport teams"
            },
        {
            name:"PSG",
            image:"https://static.displate.com/280x392/displate/2021-11-22/2a4caac1e119d8c65c96a16d1d76d572_3735a341437b8b8d7d4ad467ffcceb40.jpg",
            description:"This stunning digital artwork showcases the renowned Paris Saint-Germain logo ",
            price:49,
            category:"sport teams"
            },
        {
            name:"messi",
            image:"https://static.displate.com/280x392/displate/2023-10-29/3a049dc50903a830654782c88597ccba_208849c4bff1a7b64ebcc4614c26876b.jpg",
            description:"messi holding the World Cup 2022 ",
            price:49,
            category:"sport teams"
            },
        {
            name:"the thing",
            image:"https://static.displate.com/324x454/displate/2024-01-13/3c7226b08622d9c7608ff904fd82d5f1_a4458c1e6ef4f09247ce47b6453b2335.avif",
            description:"the original poster for the 1983 movie 'the thing'",
            price:39,
            category:"movies,comics"
            },
        {
            name:"joker",
            image:"https://static.displate.com/280x392/displate/2021-12-06/b3fa1c7b7cb4a01d34e7052b6f884f2d_8bb3596f4650cad87d8785705ec71fa3.jpg",
            description:"Joker with Batman card",
            price:49,
            category:"movies,comics"
            },        
        {
            name:"deadpool",
            image:"https://static.displate.com/280x392/displate/2024-02-05/790e5ed95032e5d5a3358f178d84e065_0538f79fbec6a51091c9f9eecc38ceb6.jpg",
            description:"Amazing metal poster featuring officially licensed art from the MCU of deadpool.",
            price:39,
            category:"movies,comics"
            },  
        {
            name:"batman",
            image:"https://static.displate.com/280x392/displate/2022-06-23/7152915d232642deb48b316c7533c389_8a813473ce6baa134b580f4d956d6aad.jpg",
            description:"Delve into the shadowy realm of Gotham City with our Batman digital artwork, a masterful embodiment of DC Comics` iconic vigilante. ",
            price:39,
            category:"movies,comics"
            },                          
            
    ]
    
}

export const PaintingSlice = createSlice({
  name: 'PaintingSlice',
  initialState,
  reducers: {
    addpaint:(state,action)=>{
        state.paintings=[...state.paintings,action.payload]
    }
  },
})

// Action creators are generated for each case reducer function
export const { addpaint } = PaintingSlice.actions

export default PaintingSlice.reducer