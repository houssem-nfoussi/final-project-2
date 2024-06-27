import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    paintings:[
        {
        name:"mountains",
        image:"https://static.displate.com/280x392/displate/2022-12-27/b10f1d5aba14881dbe80f8ca843edd2a_43f8622088e38f0e9d5ad19c1f15adc3.jpg",
        description:"Mountain landscape scenery",
        price:119,
        category:"landscapes"
        },
        {
            name:"lighthouse",
            image:"https://static.displate.com/280x392/displate/2024-05-16/54c8c5e58bf3ec18a3c448b616f9c4fd_d31e1b1bee9b627077fbd62ea4794a08.jpg",
            description:"A captivating scene of a rocky path leading to a lighthouse under a brilliant moon and expansive starry sky",
            price:49,
            category:"landscapes"
            },
        
        {
            name:"river",
            image:"https://static.displate.com/280x392/displate/2024-03-21/f420e8075011345d33ac3591bb4310fc_182976c84d43d837baf4acd7b62aadb8.jpg",
            description:"Rocky Mountain Aurora.",
            price:69,
            category:"landscapes"
            },
        {
            name:"forest",
            image:"https://static.displate.com/280x392/displate/2023-03-08/82b6b8eb4aa698db093cab43ccfc1ee4_294c91bed8efa95177b3becae3cc3eda.jpg",
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
            name:"lake",
            image:"https://static.displate.com/280x392/displate/2022-06-07/c0e4a1bcebdf6205d2c9925389e6b873_52cfeea3c638ba70976d3e136b12d2c0.jpg",
            description:"Peaceful and calm Simojoki in Finnish Lapland on a nightless night reflects the midnight sun and clouds",
            price:89,
            category:"landscapes"
            },
        {
            name:"call of duty",
            image:"https://static.displate.com/280x392/displate/2022-11-08/0556eb39d571eee6fda17e015989b181_0824165c81676e8487f4b312e552fc00.jpg",
            description:"This piece from our exclusive `Call of Duty Operators` collection captures the essence of heroism and tactical prowess",
            price:49,
            category:"gaming"
            },
        {
            name:"the witcher",
            image:"https://static.displate.com/280x392/displate/2019-04-25/39bd80739219852d59de638830d1b19a_b23a4bba572da40942a272ec6e735a23.jpg",
            description:"This stunning digital artwork titled Geralt features a captivating depiction of a medieval fantasy warrior.",
            price:144,
            category:"gaming"
            },   
        {
            name:"DOOM",
            image:"https://static.displate.com/280x392/displate/2021-04-21/3d9d1c41e4a781ff0e6a09fdf980c1ff_bb158dfdaa6a8577459e0fb15ed5ace3.jpg",
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
            name:"assassin's creed",
            image:"https://static.displate.com/280x392/displate/2022-07-05/1ed0f5290797d02cc67d18ac91661c4a_e95fb6ea704ffc1441e83fa09e7c30f0.jpg",
            description:"Syndicate Raven",
            price:49,
            category:"gaming"
            },
        {
            name:"elden ring",
            image:"https://static.displate.com/280x392/displate/2023-02-09/4b29d0c61c49bc00ef473c5e5d6365fe_3947dc0bd54c512ce59f6e2d5afd7013.jpg",
            description:"original elden ring art used in its promotion",
            price:49,
            category:"gaming"
            },                    
                 
        {
            name:"arsenal",
            image:"https://static.displate.com/280x392/displate/2020-07-21/602cce304cdceeb3318993ccde493e2d_f19554651269177c901e6efcbc19efc2.jpg",
            description:"Official Licensed high-quality metal print featuring the current club crest in gold",
            price:49,
            category:"sport "
            },
            
        {
            name:"FC Barcelona",
            image:"https://static.displate.com/280x392/displate/2021-07-29/57dfb9c7762d22d8ef09cb421e8d7b26_2bccd687e6ff79e91aa8631557a5f600.jpg",
            description:"This stunning digital artwork showcases the emblem of a renowned football club. ",
            price:49,
            category:"sport "
            },
        {
            name:"PSG",
            image:"https://static.displate.com/280x392/displate/2021-11-22/2a4caac1e119d8c65c96a16d1d76d572_3735a341437b8b8d7d4ad467ffcceb40.jpg",
            description:"This stunning digital artwork showcases the renowned Paris Saint-Germain logo ",
            price:49,
            category:"sport "
            },
        {
            name:"basket ball",
            image:"https://static.displate.com/280x392/displate/2024-01-07/31a78a9ae292d6167fd17710362a4357_c0c1cce3db006ba9a067c6fbaf219eee.jpg",
            description:"Basketball pop art illustration.",
            price:49,
            category:"sport "
            },
        {
            name:"ronaldinho",
            image:"https://static.displate.com/280x392/displate/2020-05-19/abdba05f48ac84b853a8102450c14572_7132dfde9bfc4ee7a91ceb24f5547660.jpg",
            description:"Fascinating Illustration of Ronaldinho. Abstract Painting designed by Creativedy Stuff ",
            price:49,
            category:"sport "
            },
        {
            name:"mike tyson",
            image:"https://static.displate.com/280x392/displate/2021-01-25/5296c95cf48e5bd46a19680ce5d301fa_03f04d48ed241bf1acf2b95a25830e24.jpg",
            description:"mike tyson painted poster ",
            price:49,
            category:"sport "
            },    
        {
            name:"john wick",
            image:"https://static.displate.com/280x392/displate/2023-06-23/c254a6b1a70b953030b193b3de671056_0a3aa198ee6b3caa6b2649ec542387d2.jpg",
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
        {
            name:"boba fett",
            image:"https://static.displate.com/280x392/displate/2023-08-21/e13c615c5ff5a09a78ade477812ada0e_05cd296ffb1e7878afdfddcffaa49799.jpg",
            description:"Boba Graffiti Helmet from the star wars saga",
            price:49,
            category:"movies,comics"
            },
        {
            name:"interstellar",
            image:"https://static.displate.com/280x392/displate/2023-12-31/818af7d7981977dd7d7d8a8f28c50060_d01b6776fa9e01ca757a095f5ba25a9d.jpg",
            description:"Boba Graffiti Helmet from the star wars saga",
            price:49,
            category:"movies,comics"
            },
        {
            name:"Kanye West ",
            image:"https://static.displate.com/280x392/displate/2023-08-15/a00ec7ea1fcd4be8cfeacfe8902edcb2_6c96e22ea4eb773efbc92aa0f5a1b661.jpg",
            description:"Kanye West rapper music Super hero",
            price:49,
            category:"music"
            },
        {
            name:"tyler the creator ",
            image:"https://static.displate.com/280x392/displate/2020-03-03/f571b9f6f16818752e9cfe8515c3977f_7c025b065f8878038d771d3168b4a5df.jpg",
            description:"This metal poster featuring the artwork of Flower Boy from the album of artist Tyler the Creator",
            price:49,
            category:"music"
            },
        {
            name:"daft punk",
            image:"https://static.displate.com/280x392/displate/2021-05-31/b3c3442adab64e003e65068255d9243d_6b6e0a22579a4a12c530c4b757dde41c.jpg",
            description:"This metal poster shows an amazing tribute to the Singer Legend",
            price:49,
            category:"music"
            },
        {
            name:"guitar",
            image:"https://static.displate.com/280x392/displate/2023-03-03/8655f6ad5e5621c7d20075c4e58ee0c1_770672f6c32fa2aa139d8325ad99493b.jpg",
            description:"his Guitar Fire metal poster features a bold, vibrant design of a red electric guitar engulfed in flames. ",
            price:69,
            category:"music"
            },
        {
            name:"MF doom",
            image:"https://static.displate.com/280x392/displate/2021-03-12/ee023dfe7ba03c096070753b9af113ec_2661f1856d90bab8fd173c4455c120e9.jpg",
            description:"MF Doom in amazing Pop art Portrait WPAP Illustration . High quality poster for your decor. ",
            price:100,
            category:"music"
            },
        {
            name:"Kendrick Lamar",
            image:"https://static.displate.com/280x392/displate/2021-10-06/7fd7ede0e71afc2190a4417679a21037_9cfca00386ca97349f1330e98c438821.jpg",
            description:"Kendrick Lamar Vintage Grunge Minimalistic Xerox Design ",
            price:100,
            category:"music"
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