import Main from "./Main"


const Handle = () => {

    const data = [
        {
            heading: "Sunset",
            pera: "A sunset is a daily spectacle where the sun, once high in the sky, descends below the horizon, painting the sky with vibrant hues. As the sun dips, the colors shift from bright yellows and oranges to deeper reds and purples, often accompanied by pink and golden tones reflected on clouds. The sky becomes a breathtaking canvas, a visual poem of light and color, before gradually fading into the blues and grays of twilight. This natural phenomenon offers a sense of peace and beauty, a reminder of the cyclical nature of day and night.",
            image: "https://media.istockphoto.com/id/538449165/photo/beautiful-cloudscape-over-the-sea-sunset-shot.jpg?s=612x612&w=0&k=20&c=XwieRIV5Df3Azuk8tH3CnAlLA-GO5GBE7R7dKtb1POw=",
            background: 'https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-landscape-with-cloud-sky-sunrise-sunset-time_74190-7481.jpg',
        },
        {
            heading: "Mountain",
            pera: "A mountain is an elevated portion of the Earth's crust, generally with steep sides that show significant exposed bedrock. Although definitions vary, a mountain may differ from a plateau in having a limited summit area, and is usually higher than a hill, typically rising at least 300 metres (980 ft) above the surrounding land. A few mountains are isolated summits, but most occur in mountain ranges.[1]Mountains are formed through tectonic forces, erosion, or volcanism,[1] which act on time scales of up to tens of millions of years.[2] Once mountain building ceases, mountains are slowly leveled through the action of weathering, through slumping and other forms of mass wasting, as well as through erosion by rivers and glaciers.[3]",
            image: "https://plus.unsplash.com/premium_photo-1688645554172-d3aef5f837ce?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmVwYWwlMjBtb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D",
            background: "https://img.freepik.com/free-vector/blue-watercolor-mountains-background_23-2149250282.jpg?semt=ais_hybrid&w=740&q=80",
        },
        {
            heading: "Nature",
            pera: "About 71% of the earth is water. The oceans hold approximately 96.5% of this water and the ice caps hold about 2%. The remaining water exists in rivers, ponds, glaciers, ice caps, lakes, as water vapor and our taps, among other water bodies. Only 1% of the earth’s water is safe for human consumption.",
            image: "https://thumbs.dreamstime.com/b/hands-holding-small-tree-9704145.jpg",
            background: "https://www.shutterstock.com/image-photo/beautiful-blurred-background-image-spring-600nw-2213392711.jpg",
        },
        {
            heading: "Rats",
            pera: 
                "Rats are a part of the rodent family, a diverse group of mammals characterised by their constantly growing incisors. The rodent family includes many species, from mice and rats to beavers and squirrels. Rats (along with other members of the rodent family) can cause significant damage to property due to their need to continuously wear down their teeth to keep them from becoming too long and causing dental problems. They have strong teeth that can gnaw or chew through heavy-duty materials, including wood, brick, cables and even some metals.",
            image: "https://vergo.uk/wp-content/uploads/2022/07/rodents-rat-1920x1080.jpeg",
            background: "https://t4.ftcdn.net/jpg/02/82/36/81/360_F_282368178_zfZhFIRmC19yIBlRtof7f6BDJsd8O9GE.jpg",
        },
        {
            heading: "Rain's Unique Smell",
            pera:
                "A rain has a distinctive scent that derives from a variety of sources. As rain falls through the atmosphere, it absorbs chemicals and gasses along the way, including petrichor – an oil produced by plants that gives rain a fresh, earthy smell.The petrichor fragrance oil comes from a variety of plants and builds up on rocks, soil, and other surfaces during dry weather. When rain falls, the oil is released into the air, producing the familiar rain-soaked aroma. The oil contains organic compounds like goemin that provide an earthy, musky odor. The longer the dry period before rain, the more petrichor oil builds up, resulting in a stronger scent during the next rainfall. Research indicates that the average concentration of geosmin in rainwater is around 0.2 to 2 nanograms per liter.",
            image: "https://media.istockphoto.com/id/1308840307/photo/protection-with-small-red-umbrella.jpg?s=612x612&w=0&k=20&c=noYe2ZB05MkiYUX2npDuVAZXcgcuDsPbrL_xyVGs1bs=",
            background: "https://www.shutterstock.com/image-vector/rain-drops-on-transparent-background-260nw-2468392299.jpg"
        },
        {
            heading: "Frogs",
            pera:
                `Adult frogs have a stout body, protruding eyes, anteriorly-attached tongue, limbs folded underneath, and no tail (the "tail" of tailed frogs is an extension of the male cloaca). Frogs have glandular skin, with secretions ranging from distasteful to toxic. Their skin varies in colour from well-camouflaged dappled brown, grey and green, to vivid patterns of bright red or yellow and black to show toxicity and ward off predators. Adult frogs live in both fresh water and on dry land; some species are adapted for living underground or in trees. As their skin is semi-permeable, making them susceptible to dehydration, they either live in moist niches or have special adaptations to deal with drier habitats. Frogs produce a wide range of vocalisations, particularly in their breeding season, and exhibit many different kinds of complex behaviors to attract mates, to fend off predators and to generally survive.`,
            image: "https://media.istockphoto.com/id/694848990/photo/little-cute-dumpy-frog-with-green-background.jpg?s=612x612&w=0&k=20&c=aJhIFUheAEdjLYhFgXhTGJ8P-l9xB6NHAW0K8Em7eh8=",
            background: "https://t4.ftcdn.net/jpg/01/55/58/51/360_F_155585158_VFaYhq3EySyHG5enx5fRKqVOXEmmbMZx.jpg"

        }
    ]
    return (
        <div className='flex flex-col overflow-y-auto gap-5 pt-5 pb-5 bg-slate-700'>
            {data.map((item, index) =>

                <Main 
                    key={index}
                    heading={item.heading}
                    pera={item.pera}
                    image={item.image}
                    background={item.background} >
                </Main>
            )}
        </div>
    )
}

export default Handle
