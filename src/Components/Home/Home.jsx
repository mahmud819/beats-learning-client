import React from 'react';
import Header from '../../Header/Header';
import Hero from '../Hero/Hero';
import GetClass from '../GetClass/GetClass';
import Services from '../Services/Services';
import FeatureClasses from '../FeatureClasses/FeatureClasses';
import LearningPlatform from '../LearningPlatform/LearningPlatform';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <GetClass></GetClass>
            <Services></Services>
            <FeatureClasses></FeatureClasses>
            <LearningPlatform></LearningPlatform>
        </div>
    );
};

export default Home;