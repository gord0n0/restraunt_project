<template>
      <v-container>
        <v-card color="black" >
            <v-card-title>
                <div class="text-h3">About Us</div>
            </v-card-title>
        </v-card>
    </v-container>  

 <v-container>
    <v-card>
        <v-card-text>
            Better Ingredients. Better Food.
            We know the more you put onto something, the more you get out. So, from the first Papa John's Restaurant, made in a broom closet in Indiana USA - to now more than 5,000 locations in 45 countries and territories around the world - we've always used better ingredients to make better food.
            Find out all about our signature, vine-ripened tomato sauce, our fresh, never frozen, dough, our Italian-style cheese, fresh vegetables and high quality meat.  
        </v-card-text>
    </v-card>
</v-container>

<!-- mid section -->
<v-container>
        <v-card color="black" >
            <v-card-title>
                <div class="text-h3">Our Team</div>
            </v-card-title>
        </v-card>
    </v-container>
<!-- carousel -->
<v-container>
<v-carousel hide-delimiters>
        <v-carousel-item src= "../public/team.jpg" cover> </v-carousel-item>
        <v-carousel-item src= "../public/team 2.jpg" cover> </v-carousel-item>
        <v-carousel-item src= "../public/team 3.jpg" cover> </v-carousel-item>
    </v-carousel>

</v-container>

<!-- cards -->
<v-container>
        <v-card class="mx-auto" elevation="24">
            <v-container>
            <v-row>
                <v-col cols="12" md="4">
                    <v-card>
                        <v-card color="black">
                            <v-card-item>
                                <v-card-title>Branch Manager</v-card-title>
                            </v-card-item>
                            <v-img height="200px" src="../public/person 1.jpg" cover ></v-img>

                            <v-card-text>
                           Mr Jaso Duran
                            </v-card-text>
                        </v-card>
                        <v-card color="black">
                            <v-card-item>
                                <v-card-title>Assistant Branch Manager</v-card-title>
                            </v-card-item>
                            <v-img height="200px" src="../public/person 2.jpg" cover ></v-img>

                            <v-card-text>
                                Mrs. Lydia Laso
                            </v-card-text>
                        </v-card>
                        
                    </v-card>
                </v-col>
            </v-row>
            </v-container>
        </v-card>
</v-container>

                       
                    




    
                 
  <!-- contacts -->
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
