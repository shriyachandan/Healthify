import React from 'react'

import Box from 'components/Box/Box'
import FormField from 'components/FormField/FormField'
import Button from 'components/Button/Button'
import Result from 'components/Result/Result'
import Highlight from 'components/Highlight/Highlight'
import Description from 'components/Description/Description'
import FormWrapper from 'components/FormWrapper/FormWrapper'
import AppWrapper from 'components/AppWrapper/AppWrapper'

const BMI = () => {
    const [weight, setWeight] = React.useState('');
    const [height, setHeight] = React.useState('');
    const [bmi, setBmi] = React.useState('');
    const [bmiCategory, setBmiCategory] = React.useState('');
    const [error, setError] = React.useState('');

    const appReset = () => {
        setWeight('');
        setHeight('');
        setBmi('');
        setBmiCategory('');
        setError('');
    }

    const calculateBMI = () => {
        if (!weight || !height) {
          setError('Fields cannot be empty');
          return false;
        }

        if (weight > 400 || height > 270 || height < 90) {
          setError('Please Enter the correct details!');
          return false;
        }

        const bmi = weight / (height / 100) ** 2;
        setBmi(bmi.toFixed(2));
        setError('');

        if (bmi < 18.5) {
            setBmiCategory('Underweight');
        } else if (bmi >= 18.5 && bmi < 25) {
            setBmiCategory('Normal');
        } else{
            setBmiCategory('Obese');
        } 
    }
  
    return (
      <AppWrapper>
        <Box>
          <h2>BMI Calculator</h2>
          <Description>The body mass index (BMI) is currently the most frequently used method of assessing overweight or obesity. It is your weight in kilograms divided by your height (in meters) squared. It allows you to distinguish between underweight, normal body weight, overweight and different degrees of obesity.</Description>

          { bmi ? (
            <>
              <Result>
                <p>Your BMI is <Highlight>{bmi}</Highlight></p>
                <p>You are <Highlight>{bmiCategory}</Highlight></p>
              </Result>
              <Button onClick={appReset}>Go Back</Button>
            </>
          ) : (
            <>
              <FormWrapper>
                <FormField
                    id="height"
                    label="Height (in cm)"
                    type="number"
                    value={height}
                    onChange={(event) => setHeight(event.target.value)}
                    placeholder='Enter your height'
                />

                <FormField
                    id="weight"
                    label="Weight (in kg)"
                    type="number"
                    value={weight}
                    onChange={(event) => setWeight(event.target.value)}
                    placeholder='Enter your weight'
                />
                {error && <p style={{ color: 'red' }}>{error}</p>}
              </FormWrapper>

              <Button onClick={calculateBMI}>Calculate</Button>
            </>
          ) }
        </Box>
      </AppWrapper>
    )
}

export default BMI