<template>
    <v-card class="mx-auto" elevation="24">
<v-container>
    <v-carousel hide-delimiters>
        <v-carousel-item src= "../public/image 1.jpg" cover> </v-carousel-item>
        <v-carousel-item src="../public/image 2.jpg" cover> </v-carousel-item>
        <v-carousel-item src="../public/image 3.jpg" cover> </v-carousel-item>
        <v-carousel-item src="../public/image 5.jpg" cover> </v-carousel-item>
    </v-carousel>
</v-container>

</v-card>
<v-container>
        <v-card class="mx-auto" elevation="24">
            <v-container>
            <v-row>
                <v-col cols="12" md="4">
                    <v-card>
                        <v-card color="black">
                            <v-card-item>
                                <v-card-title>Promotion</v-card-title>

                                <v-card-subtitle>Limited Offer!!!</v-card-subtitle>
                            </v-card-item>
                            <v-img height="200px" src="../public/food 1.jpg" cover ></v-img>

                            <v-card-text>
                           Hot Spicy Chicken Wings =799 KES
                            </v-card-text>
                        </v-card>
                        <v-card color="black">
                            <v-card-item>
                            <v-card-title>Promotions</v-card-title>

                            <v-card-subtitle>Limited Offer!!!</v-card-subtitle>
                            </v-card-item>
                            <v-img height="200px" src="../public/drink 3.avif"cover ></v-img>

                            <v-card-text>
                            Dragon fruit drinks = 599 KES
                            </v-card-text>
                        </v-card>
                    </v-card>

                </v-col>

                <v-col cols="12" md="4">
                    <v-card>
                    <v-card color="black">
                    <v-card-item>
                    <v-card-title>Upcoming Events</v-card-title>

                    <v-card-subtitle>Eat till you drop</v-card-subtitle>
                    </v-card-item>
                    <v-img height="200px" src="../public/food 4.jpg" cover ></v-img>

                    <v-card-text>
                   All you can eat for the price =4999 KES per person
                    </v-card-text>
                    </v-card>
                    <v-card color="black">
                    <v-card-item>
                    <v-card-title>Upcomming Events</v-card-title>

                    <v-card-subtitle>Drink Tasting</v-card-subtitle>
                    </v-card-item>
                    <v-img height="200px" src="../public/drink 4.avif" cover ></v-img>

                    <v-card-text>
                    31st March dont miss out =1000 KES 
                    </v-card-text>
                    </v-card>
                </v-card>

                </v-col>

                <v-col cols="12" md="4">
                    <v-card>
                        <v-card color="black">
                    <v-card-item>
                    <v-card-title>Promotions</v-card-title>

                    <v-card-subtitle>Limited Offer!!</v-card-subtitle>
                    </v-card-item>
                    <v-img height="200px" src="../public/food 3.jpg" cover ></v-img>

                    <v-card-text>
                    10% OFF =899 KES Per Person
                    </v-card-text>
                        </v-card>
                        <v-card color="black">
                    <v-card-item>
                    <v-card-title>Promotions</v-card-title>

                    <v-card-subtitle>Limited Offer!!</v-card-subtitle>
                    </v-card-item>
                    <v-img height="200px" src="food 2.jpg" cover ></v-img>

                    <v-card-text>
                    10% OFF! Only = 999 KES
                    </v-card-text>
                        </v-card>
                    </v-card>

                </v-col>
            </v-row>
        </v-container>
        </v-card>
    </v-container>

    <--new section>
        <v-container>
        <v-card class="mx-auto" elevation="24" color = "black">
            <v-container>
                <v-row >
                    <v-col cols="12" md="4">
                        <v-card>
                            <v-card-item>
                                <v-card-title>Contact Us</v-card-title>
                            </v-card-item>
                            <v-card-text><v-icon icon="mdi-phone" /> 0722123456</v-card-text>
                            <v-card-text><v-icon icon="mdi-email" /> myrestaurant@example.com</v-card-text>
                            <v-card-text>Operating Hours: 10.00am - 10.00pm</v-card-text>
                        </v-card>
                    </v-col>

                        <v-col cols="12" md="4">
                        <v-card>
                            <v-card-item>
                            <v-card-title>Find us on our socials</v-card-title>

                            </v-card-item>
                            <v-card-text><v-icon icon="mdi-instagram" /> myrestaurant</v-card-text>
                            <v-card-text><v-icon icon="mdi-twitter" /> myrestaurant</v-card-text>
                            <v-card-text><v-icon icon="mdi-facebook" /> myrestaurant</v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-card>
                            <v-card-item>
                            <v-card-title>Our Restaurant Locations</v-card-title>
                            </v-card-item>
                            <v-card-text>Madaraka</v-card-text>
                            <v-card-text>CBD</v-card-text>
                            <v-card-text>Langata</v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-container>
</template>

<script setup>

</script>