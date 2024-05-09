export const categories = ["All Categories", "Biography", "Fiction", "Mystery", "Fantasy", "Romance"];

export const sliderParameters = {
    "step": "100",
    "min": "111",
    "max": "8264",
};

export const setPrice = function(n: number) {
    return Number(sliderParameters.min) + n * Number(sliderParameters.step);    
} 

export const bookPrice = [0, 30, 80];