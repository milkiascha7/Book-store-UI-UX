import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, SIZES, icons, images } from '../constants'
import { Colors } from 'react-native/Libraries/NewAppScreen'



const LineDivider = () => {
    return(
        <View style={{ width: 1, paddingVertical: 18 }}>
            <View style={{ flex: 1, borderLeftColor: COLORS.lightGray, borderLeftWidth: 1}}>

            </View>
        </View>
    )
}


const Home = ({ navigation }) => {
    const profileData = {
        name: 'Username',
        point: 200
    }

    const book1984 = {
        id: 1,
        bookName: "1984",
        bookCover: images.nineteeneightyfour,
        rating: 3.75,
        language: "Amh",
        pageNo: 810,
        author: "Georoge Orwell",
        genre: [
            "Sci-fi", "Political fiction"
        ],
        readed: "73k",
        description: " 1984 is a dystopian social science fiction novel and cautionary tale written by English writer George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwell's ninth and final book completed in his lifetime. Thematically, it centres on the consequences of totalitarianism, mass surveillance and repressive regimentation of people and behaviours within society. Orwell, a democratic socialist, modelled the totalitarian government in the novel after Stalinist Russia and Nazi Germany. More broadly, the novel examines the role of truth and facts within politics and the ways in which they are manipulated.",
        backgroundColor: "rgba(119,77,143,0.8)",
        navTintColor: "#FFF"
    }

    const bookoromaye = {
        id: 2,
        bookName: "Oromaye",
        bookCover: images.oromaye,
        rating: 4.75,
        language: "Amh",
        pageNo: 510,
        author: "Bealu Girma",
        genre: [
            "Drama", "Adventure", "Romance"
        ],
        readed: "43k",
        description: "This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!",
        backgroundColor: "rgba(119,77,143,0.8)",
        navTintColor: "#FFF"
    }
    const bookfikereskemekaber = {
        id: 3,
        bookName: "Fiker Eske Mekaber",
        bookCover: images.fikereskemekaber,
        rating: 4.5,
        language: "Amh",
        pageNo: 810,
        author: "Hadis Alemayehu",
        genre: [
            "Drama", "Romance"
        ],
        readed: "73k",
        description: "The Red Star Campaign had been declared by Colonel Mengistu Haile Mariam in a speech in Asmara on January 25, 1982. In his speech Mengistu called for the crushing of secessionist bandits, i.e. the EPLF guerrilla in Eritrea, the TPLF in Tigray and the EPRP and EDU in Gondar. The campaign was supposed to focus both on military means as well as supporting reconstruction in the affected areas. The Commission for Organizing the Party of the Working People of Ethiopia was assigned the task of leading the campaign. The government sent some 120,000 troops to participate in the campaign, making it the largest military offensive of the Derg in the Eritrean war. The author Baalu Girma, had been invited by Mengistu to work as propaganda chief in the Red Terror Campaign. He had assumed the position believing in the goals of the campaign. ",
        backgroundColor: "rgba(119,77,143,0.8)",
        navTintColor: "#FFF"
    }


    const bookOtherWordsForHome = {
        id: 4,
        bookName: "Other Words For Home",
        bookCover: images.otherWordsForHome,
        rating: 4.5,
        language: "Eng",
        pageNo: 341,
        author: "Jasmine Warga",
        genre: [
            "Romance", "Adventure", "Drama"
        ],
        readed: "12k",
        description: "Jude never thought she’d be leaving her beloved older brother and father behind, all the way across the ocean in Syria. But when things in her hometown start becoming volatile, Jude and her mother are sent to live in Cincinnati with relatives. At first, everything in America seems too fast and too loud. The American movies that Jude has always loved haven’t quite prepared her for starting school in the US—and her new label of 'Middle Eastern,' an identity she’s never known before. But this life also brings unexpected surprises—there are new friends, a whole new family, and a school musical that Jude might just try out for. Maybe America, too, is a place where Jude can be seen as she really is.",
        backgroundColor: "rgba(240,240,232,0.8)",
        navTintColor: "#000"
    }

    const bookTheMetropolis = {
        id: 5,
        bookName: "The Metropolis",
        bookCover: images.theMetropolist,
        rating: 4.1,
        language: "Eng",
        pageNo: 272,
        author: "Seith Fried",
        genre: [
            "Adventure", "Drama"
        ],
        readed: "13k",
        description: "In Metropolis, the gleaming city of tomorrow, the dream of the great American city has been achieved. But all that is about to change, unless a neurotic, rule-following bureaucrat and an irreverent, freewheeling artificial intelligence can save the city from a mysterious terrorist plot that threatens its very existence. Henry Thompson has dedicated his life to improving America's infrastructure as a proud employee of the United States Municipal Survey. So when the agency comes under attack, he dutifully accepts his unexpected mission to visit Metropolis looking for answers. But his plans to investigate quietly, quickly, and carefully are interrupted by his new partner: a day-drinking know-it-all named OWEN, who also turns out to be the projected embodiment of the agency's supercomputer. Soon, Henry and OWEN are fighting to save not only their own lives and those of the city's millions of inhabitants, but also the soul of Metropolis. The Municipalists is a thrilling, funny, and touching adventure story, a tour-de-force of imagination that trenchantly explores our relationships to the cities around us and the technologies guiding us into the future.",
        backgroundColor: "rgba(247,239,219,0.8)",
        navTintColor: "#000"
    }

    const bookTheTinyDragon = {
        id: 6,
        bookName: "The Tiny Dragon",
        bookCover: images.theTinyDragon,
        rating: 3.5,
        language: "Eng",
        pageNo: 110,
        author: "Ana C Bouvier",
        genre: [
            "Drama", "Adventure", "Romance"
        ],
        readed: "13k",
        description: "This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!",
        backgroundColor: "rgba(119,77,143,0.8)",
        navTintColor: "#FFF"
    }
    const bookThinkandGrowRich = {
        id: 7,
        bookName: "Think and Grow Rich",
        bookCover: images.thinkandGrowRich,
        rating: 3.5,
        language: "Eng",
        pageNo: 110,
        author: "Napolean Hill",
        genre: [
            "Drama", "Devlopment"
        ],
        readed: "83k",
        description: "It remains the biggest seller of Napoleon Hill's books. BusinessWeek magazine's Best-Seller List ranked it the sixth best-selling paperback business book 70 years after it was published. Think and Grow Rich is listed in John C. Maxwell's A Lifetime Must Read Books List. While the book's title and much of the writing concerns increasing income, the author proclaims that his philosophy can help people succeed in any line of work, to do and be anything they can imagine.Think and Grow Rich is based on Hills earlier work The Law of Success, and is the result of more than twenty years of study of many individuals who had amassed personal fortunes.",
        backgroundColor: "rgba(119,77,143,0.8)",
        navTintColor: "#FFF"
    }
    const bookharrypotter = {
        id: 8,
        bookName: "HarryPotter and The Deathly Hallows",
        bookCover: images.harrypotter,
        rating: 4.5,
        language: "Eng",
        pageNo: 810,
        author: "J.K Rolling",
        genre: [
            "Drama", "Adventure", "Sci-fi"
        ],
        readed: "193k",
        description: "Following Dumbledore's death, Voldemort has taken effective control of the Ministry of Magic. Meanwhile, Harry is about to turn seventeen and will lose his deceased mother's protection. Members of the Order of the Phoenix relocate the Dursleys, and prepare to move Harry to the Burrow by flying him there, using Harry's friends as decoys. Death Eaters attack them upon departure, and in the ensuing battle, Mad-Eye Moody and Hedwig are killed while George Weasley is wounded. Voldemort arrives to kill Harry, but Harry's wand fends him off on its own.",
        backgroundColor: "rgba(119,77,143,0.8)",
        navTintColor: "#FFF"
    }
   


    const myBooksData = [

        {
            ...book1984,
            completion: "15%",
            lastRead: "3d 5h",

        },

        {
            ...bookThinkandGrowRich,
            completion: "75%",
            lastRead: "2d 15h",

        },
        {
            ...bookoromaye,
            completion: "85%",
            lastRead: "0d 5h",

        },
        {
            ...bookfikereskemekaber,
            completion: "100%",
            lastRead: "4d 19h",

        },

        {
            ...bookOtherWordsForHome,
            completion: "75%",
            lastRead: "3d 5h",

        },
        {
            ...bookTheMetropolis,
            completion: "23%",
            lastRead: "10d 5h",

        },
        {
            ...bookTheTinyDragon,
            completion: "10%",
            lastRead: "1d 2h",

        },
   

    ]

    const categoriesData = [
        {
            id: 1,
            categoryName: "Best Seller",
            books: [
                bookOtherWordsForHome, bookTheMetropolis, bookThinkandGrowRich, bookTheTinyDragon, bookharrypotter
            ]
        },
        {
            id: 2,
            categoryName: "The Latest",
            books: [
                bookTheMetropolis, bookoromaye, bookfikereskemekaber
            ]
        },
        {
            id: 3,
            categoryName: "Coming Soon",
            books: [
                bookTheTinyDragon
            ]
        },
       
        
    ]



    const [profile, setProfile] = useState(profileData)
    const [myBooks, setMyBooks] = useState(myBooksData)
    const [categories, setCategories] = useState(categoriesData)
    const [selectedCategory, setSelectedCategory] = useState(1)

    const renderHeader = (profile) => {
        return (
            <View style={{ 
                    flex: 1, 
                    flexDirection: 'row', 
                    paddingHorizontal: SIZES.padding, 
                    alignItems: 'center' 
                }}
            >       
                {/* greetings */ }
                <View style={{ flex: 1 }}>
                        <View style={{ marginRight: SIZES.padding }}>
                            <Text style={{ ...FONTS.h3, color: COLORS.white }}>Good Morning</Text>
                            <Text style={{ ...FONTS.h2, color: COLORS.white }}>{profile.name}</Text>
                        </View>
                </View>

                {/* points */}
                <TouchableOpacity style={{
                        backgroundColor: COLORS.primary,
                        height: 40,
                        paddingLeft: 3,
                        paddingRight: SIZES.radius,
                        borderRadius: 20
                    }}
                    onPress={() => { console.log("Point")}}
                >
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{ 
                                width: 30, 
                                height: 30, alignItems: 'center', 
                                justifyContent: 'center',
                                borderRadius: 25, 
                                backgroundColor: 'rgba(0, 0, 0, 0.5)'
                            }}
                        >
                            <Image  
                                source={icons.plus_icon}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20
                                }}
                            />
                        </View>
                        <Text style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.body3}}>{profile.point} point</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
       
    }

    const renderButtonSection = () => {
        return(
            <View style={{ flex: 1, justifyContent: 'center', padding:SIZES.padding }}>
                <View style={{ 
                        flexDirection: 'row', 
                        height: 70, 
                        backgroundColor: COLORS.secondary, 
                        borderRadius: SIZES.radius 
                    }}
                >
                    {/* claim */}
                    <TouchableOpacity
                        style={{ flex: 1 }}
                        onPress={() => console.log("Claim")}
                    >
                        <View style={{ 
                                flex: 1, 
                                flexDirection: 'row', 
                                alignItems: 'center', 
                                justifyContent: 'center' 
                            }}
                        >
                            <Image 
                                source={icons.claim_icon}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30
                                }}
                            />
                                <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white }}> Claim</Text>
                        </View>
                    </TouchableOpacity>

                    {/* divider */}
                    <LineDivider />

                    {/* get point */}
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Image 
                            source={icons.point_icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                        <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white }}>Get Point</Text>
                    </TouchableOpacity>


                    {/* Divider */}
                    <LineDivider />

                    {/* My Card */}
                    <TouchableOpacity style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Image 
                            source={icons.card_icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                        <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white }}>My Card</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const renderMyBookSection = () => {

        const renderItem = ({ item, index }) => {
            return(
                <TouchableOpacity
                    style={{
                        flex: 1,
                        marginLeft: index == 0 ? SIZES.padding : 0,
                        marginRight: SIZES.radius
                    }}
                    onPress={() => navigation.navigate('BookDetails', { book: item })}
                >
                    {/* Book cover */}
                    <Image 
                        source={item.bookCover}
                        resizeMode="cover"
                        style={{
                            width: 180,
                            height: 250,
                            borderRadius: 20
                        }}
                    />

                    {/* Book Info */}
                    <View style={{ 
                                marginTop: SIZES.radius, 
                                flexDirection: 'row', 
                                alignItems: 'center'
                            }}
                        >
                            <Image 
                                source={icons.clock_icon}
                                style={{
                                    width: 20, 
                                    height: 20,
                                    tintColor: COLORS.lightGray
                                }}
                            />
                            <Text style={{ marginLeft: 5 , ...FONTS.body3, color: COLORS.lightGray }}>{item.lastRead}</Text>
                            <Image 
                                source={icons.page_icon}
                                style={{
                                    marginLeft: SIZES.radius,
                                    width: 20,
                                    height: 20,
                                    tintColor: COLORS.lightGray
                                }}
                            />
                            <Text style={{ marginLeft: 5 , ...FONTS.body3, color: COLORS.lightGray }}>{item.completion}</Text>
                    </View>
                </TouchableOpacity>
            )
        }
        return (
            <View style={{ flex: 1 }}>
                {/* header */}
                <View style={{
                        paddingHorizontal: SIZES.padding, 
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <Text style={{ ...FONTS.h2, color: COLORS.white }}>My Book</Text>

                    <TouchableOpacity
                        onPress={() => console.log("See More")}
                    >
                        <Text style={{ 
                                ...FONTS.body3, 
                                color: COLORS.lightGray,
                                alignSelf:'flex-start' ,
                                textDecorationLine: 'underline'
                            }}
                        >
                                See More
                        </Text>
                    </TouchableOpacity>
                </View>
            
                {/* Books */}
                <View style={{ flex: 1, marginTop: SIZES.padding}}>
                    <FlatList 
                        data={myBooks}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id}`}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />    
                </View>
            </View>
        )
    }

    const renderCategoryHeader =() => {

        const renderItem = ({ item }) => {
            return(
                <TouchableOpacity
                    style={{ flex: 1, marginRight: SIZES.padding }}
                    onPress={() => setSelectedCategory(item.id)}
                >
                    {
                        selectedCategory == item.id &&
                        <Text style={{ ...FONTS.h2, color: COLORS.white }}>{item.categoryName}</Text>
                    }
                    {
                        selectedCategory !== item.id &&
                        <Text style={{...FONTS.h2, color: COLORS.lightGray }}>{item.categoryName}</Text>
                    }
                </TouchableOpacity>
            )
        }

        return(
            <View style={{
                    flex: 1,
                    paddingLeft: SIZES.padding,
                }}
            >
                <FlatList
                    data={categories}
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                />

            </View>
        )
    }

    const renderCategoryData = () => {

        var books = []

        let selectedCategoryBooks = categories.filter(a => a.id === selectedCategory)

        if(selectedCategoryBooks.length > 0) {
            books = selectedCategoryBooks[0].books
        }

        const renderItem = ({item}) => {
            return(
                <View style={{ marginVertical: SIZES.base }}>
                    <TouchableOpacity
                        style={{ flex: 1, flexDirection: 'row'}}
                        onPress={() => navigation.navigate("BookDetails", {book: item})}
                    >
                        { /* Book Cover */ }

                    <Image 
                        source={item.bookCover}
                        resizeMode="contain"
                        style={{ width: 100, height: 150, borderRadius: 10 }}
                    />
                        <View style={{ flex: 1, marginLeft: SIZES.radius }}>
                            {/* Book name and author */}
                            <View>
                                <Text style={{ paddingRight: SIZES.padding, ...FONTS.h3, color: COLORS.white }}>{item.bookName}</Text>
                                <Text style={{ ...FONTS.h4, color: COLORS.lightGray }}>{item.author}</Text>
                            </View>

                            {/* Book name and author */}
                            <View style={{ flexDirection: 'row', marginTop: SIZES.radius }}>
                                <Image 
                                    source={icons.page_filled_icon}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        tintColor: COLORS.lightGray
                                    }}
                                />
                                <Text style={{ ...FONTS.body4, color: COLORS.lightGray, paddingHorizontal: SIZES.radius}}>
                                    {item.pageNo}
                                </Text>
                                <Image 
                                    source={icons.read_icon}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        tintColor: COLORS.lightGray
                                    }}
                                />
                                <Text style={{ ...FONTS.body4, color: COLORS.lightGray, paddingHorizontal: SIZES.radius}}>
                                    {item.readed}
                                </Text>
                            </View>



                            {/* genre */}
                            <View style={{ flexDirection: 'row', marginTop: SIZES.base }}>
                                {
                                    item.genre.includes("Adventure") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkGreen, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightGreen }}>Adventure</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Romance") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkRed, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightRed }}>Romance</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Drama") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkBlue, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightGray2 }}>Drama</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Development") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkBlue, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightGreen }}>Drama</Text>
                                    </View>
                                }
                            </View>

                        </View>
                    </TouchableOpacity>

                    {/** bookmark button */}
                    <TouchableOpacity
                            style={{ position: 'absolute', top: 5, right: 5, paddingHorizontal: 5}}
                            onPress={() => console.log("BookMark clicked")}
                    >
                        <Image 
                            source={icons.bookmark_icon}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: COLORS.lightGray
                            }}
                        />
                    </TouchableOpacity>
                </View>
            )
        }

        return(
            <View style={{flex: 1, marginTop: SIZES.radius, paddingLeft: SIZES.padding }}>
   
                    <FlatList 
                        data={books}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id}`}
                        showsVerticalScrollIndicator={false}
                        horizontal
                    />
               
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
            <View style={{ height: 200}}>
                {renderHeader(profile)} 
                {renderButtonSection()} 
            </View>

            {/* body section */}
            <ScrollView>
                <View>
                    {renderMyBookSection(myBooks)}
                </View>

                {/* Categories section */}
                <View style={{ marginTop: SIZES.padding }}>
                    <View>
                        {renderCategoryHeader()}
                    </View>
                    <View>
                        {renderCategoryData()}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})