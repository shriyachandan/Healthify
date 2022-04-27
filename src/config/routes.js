// Icons
import bmiIcon from "assets/icons/bmi.svg"
import waterIcon from "assets/icons/water.svg"
import caloriesIcon from "assets/icons/calories.svg"

// Views
import BMI from "views/BMI"
import Water from "views/Water"
import Calories from "views/Calories"

export const routes = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'BMI Calculator',
        path: '/bmi',
        component: <BMI />,
        icon: bmiIcon,
    },
    {
        name: 'Water Intake Calculator',
        path: '/water',
        component: <Water />,
        icon: waterIcon,
    },
    {
        name: 'Calorie Calculator',
        path: '/calories',
        component: <Calories />,
        icon: caloriesIcon,
    },
]