<template>
 <v-container>
        <v-card color="blue" >
            <v-card-title>
                <div class="text-h3">Our Menu</div>
            </v-card-title>
        </v-card>
    </v-container>

<v-container>
        <v-card class="mx-auto" elevation="24">
            <v-container>
            <v-row>
                <v-col cols="12" md="4" v-for="item in menuItems":key=item>
                    <v-card>
                        <v-card color="black">
                            <v-card-item>
                                <v-card-title>{{ item.name }}</v-card-title>

                                <v-card-subtitle>{{ item.description }}</v-card-subtitle>
                            </v-card-item>
                            <v-img height="200px" src="../public/food 1.jpg" cover ></v-img>

                            <v-card-text>{{ item.price }}</v-card-text>
                            
                        </v-card>
                    </v-card>
                </v-col>    
            </v-row>
            </v-container>  
     </v-card>  
</v-container>


</template>


<script setup>
const menuItems = [
    {
        name: "Chips",
        price: 200,
        description: "Best chips in town",
        size: "Large",
        offers: "None",
        image: "../public/fries.jpg"
    },
    {
        name: "Sausage",
        price: 50,
        description: "Best sausages in town",
        size: "None",
        offers: "None",
        image: "../public/sausage.jpg"
    },
    {
        name:"Shawarma",
        price: 250,
        description: "Best shawarma in town",
        size:"Large",
        Offers:"None",
        image:"../public/shawarma.jpg"
    },
    {
        name:"Burger",
        price: 250,
        description: "Best burger in town",
        size:"None",
        offers: "None",
        image:"../public/burger.jpg"

    },
    {
        name:"juice",
        price: 499,
        description: "best juice in town",
        size: "None",
        offers: "None",
        image: "../public/drink 3.avif"
    },
    {
        name:"kabab",
        price: 250,
        description: "best kababs in town",
        size: "None",
        offers:"None",
        image:"../public/image 3.jpg"
    }
]
</script>
