// import React, { useState } from 'react';
// import axios from 'axios';

// const PotatoDiseaseDetection = () => {
//   const [file, setFile] = useState(null);
//   const [imageUrl, setImageUrl] = useState('');
//   const [result, setResult] = useState('');

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//     const objectUrl = URL.createObjectURL(selectedFile);
//     console.log('Object URL:', objectUrl); // Log object URL here
//     setImageUrl(objectUrl);
//     setResult('');
//   };

//   const handleSubmit = async () => {
//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       const response = await axios.post('http://localhost:5000/predict/potato', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       setResult(response.data.result);
//     } catch (error) {
//       if (error.response) {
//         console.error('Server Error:', error.response.data);
//       } else if (error.request) {
//         console.error('Request Error:', error.request);
//       } else {
//         console.error('Error:', error.message);
//       }
//     }
//   };

//   return (
//     <section className="text-gray-600 flex flex-row body-font" style={{ backgroundColor: '#006A4E' }}>
//       <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
//         {imageUrl && (
//           <div className="lg:w-2/6 md:w-3/8 w-9/7 mb-10 relative">
//             <img className="w-full h-full object-cover object-center rounded border border-gray-300" alt="hero" src={imageUrl} />
//           </div>
//         )}
//         <div className="text-center lg:w-2/3 w-full">
//           <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white" style={{ fontFamily: 'Fira Sans' }}>Upload to Predict the Crop Disease</h1>
//           <p className="mb-8 leading-relaxed text-white" style={{ fontFamily: 'Sedan' }}>Gain invaluable agricultural insights with our Potato Disease Detection technology. Simply upload an image of your potato crop for accurate analysis, ensuring optimal yield and crop health.</p>
//           <div className="flex justify-center">
//             <input type="file" onChange={handleFileChange} className="hidden" id="uploadMRI" />
//             <label htmlFor="uploadMRI" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg m-2 cursor-pointer">Upload Image</label>
//             <button onClick={handleSubmit} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg m-2">Predict</button>
//           </div>
//           {result && <p className="mb-10 leading-relaxed font-bold text-xl text-white">Prediction: {result}</p>}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PotatoDiseaseDetection;


// import React, { useState } from 'react';
// import axios from 'axios';
// import backgroundImage from './bg11.jpg'; // Import the background image

// const PotatoDiseaseDetection = () => {
//   const [file, setFile] = useState(null);
//   const [imageUrl, setImageUrl] = useState('');
//   const [result, setResult] = useState('');

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//     const objectUrl = URL.createObjectURL(selectedFile);
//     console.log('Object URL:', objectUrl); // Log object URL here
//     setImageUrl(objectUrl);
//     setResult('');
//   };

//   const handleSubmit = async () => {
//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       const response = await axios.post('http://localhost:5000/predict/potato', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       setResult(response.data.result);
//     } catch (error) {
//       if (error.response) {
//         console.error('Server Error:', error.response.data);
//       } else if (error.request) {
//         console.error('Request Error:', error.request);
//       } else {
//         console.error('Error:', error.message);
//       }
//     }
//   };

//   return (
//     <section className="text-gray-600 body-font relative" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>
//       <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col relative z-25">
//         {imageUrl && (
//           <div className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 relative">
//             <img className="w-full h-full object-cover object-center rounded border-8 border-white" alt="hero" src={imageUrl} />
//           </div>
//         )}
//         <div className="text-center lg:w-2/3 w-full">
//           <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-white" style={{ fontFamily: 'Georgia' }}>Upload to Predict the Crop</h1>
//           <p className="mb-8 leading-relaxed sm:text-2xl text-xl text-white">"Protecting Harvests, Preserving Futures: Detecting Crop Diseases for a Flourishing Agriculture"</p>
//           <div className="flex justify-center">
//             <input type="file" onChange={handleFileChange} className="hidden" id="uploadMRI" />
//             <label htmlFor="uploadMRI" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg m-2 cursor-pointer">Upload Image</label>
//             <button onClick={handleSubmit} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg m-2">Predict</button>
//           </div>
//           {result && <p className="mb-10 leading-relaxed font-bold  text-2xl text-white">Prediction: {result}</p>}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PotatoDiseaseDetection;


import React, { useState } from 'react';
import axios from 'axios';
import backgroundImage from './bg11.jpg'; // Import the background image

const PotatoDiseaseDetection = () => {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [result, setResult] = useState('');
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    const objectUrl = URL.createObjectURL(selectedFile);
    setImageUrl(objectUrl);
    setResult('');
    setMessage('');
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/predict/potato', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setResult(response.data.result);
      setMessage(getMessage(response.data.result));
    } catch (error) {
      if (error.response) {
        console.error('Server Error:', error.response.data);
      } else if (error.request) {
        console.error('Request Error:', error.request);
      } else {
        console.error('Error:', error.message);
      }
    }
  };

  const getMessage = (prediction) => {
    let message = '';
    switch (prediction) {
      case 'Apple___Apple_scab':
        message = 'Symptoms: Apple scab, caused by the fungus Venturia inaequalis,is a common disease affecting apple trees. Initially, small, olive-green to black spots appear on the leaves. 1. These spots gradually enlarge and develop a velvety texture. 2. Infected leaves may become twisted or curled. 3. Severe infections can lead to premature leaf drop, weakening the tree.';
        break;
      case 'Corn_(maize)___Common_rust_':
        message = 'Symptoms: Common rust produces rust-colored to dark brown, elongated pustules on both leaf surfaces. The pustules contain rust spores (urediniospores) that are cinnamon brown in color. Pustules darken as they age. Leaves, as well as sheaths, can be infected. Under severe conditions leaf chlorosis and death may occur. Common rust can be differentiated from Southern rust by the brown pustules occurring on both top and bottom leaf surfaces with common rust.';
        break;
      case 'Apple___Black_rot':
        message = 'Symptoms: Apple black rot, caused by the fungus Botryosphaeria obtusa, is a destructive disease affecting apple trees. The symptoms of Apple black rot include: 1. Dark, irregularly shaped lesions may appear on the leaves, often surrounded by a yellow halo. 2. Lesions may coalesce, leading to extensive leaf necrosis. 3. Severely infected leaves may wilt, curl, and drop prematurely.';
        break;
      case 'Cherry_(including_sour)___Powdery_mildew':
        message = 'Symptoms: Powdery mildew on cherry trees, including sour cherries, is caused by fungal pathogens from the genus Podosphaera. Here are the symptoms of powdery mildew on cherry trees: Infected leaves may initially develop small, circular, white spots on the upper surface. As the infection progresses, the entire leaf surface may become covered with the powdery growth. Severely infected leaves can curl, distort, and eventually drop prematurely.';
        break;
      case 'Blueberry___healthy':
        message = 'Blueberry Leaf is Healthy';
        break;
      case 'Potato___Late_blight':
        message = 'Symptoms: Late blight, caused by the oomycete Phytophthora infestans, is a serious disease affecting potato plants.  Leaf symptoms: Leaf symptoms of late blight on potato plants typically start as small, dark, water-soaked lesions on the lower leaves. These lesions quickly enlarge and turn brown, often spreading rapidly across the leaf surface. As the disease progresses, the affected areas become necrotic, with a characteristic olive-green to brown coloration. Under humid conditions, a white, cottony growth (sporulation) may develop on the undersides of the lesions. Eventually, the leaves may become entirely blighted, turning yellow, and then collapsing. This rapid defoliation can severely impact the health and yield of the potato plants.';
        break;
      case 'Potato___healthy':
        message = 'Potato Leaf is Healthy ';
        break;
      case 'Potato___Early_blight':
        message = 'Symptoms: Early blight, caused by the fungus Alternaria solani, affects potato plants. Early blight symptoms on potato leaves include the formation of dark brown to black lesions. These lesions often have a concentric ring pattern and may resemble a target or bullseye. As the disease progresses, the lesions can expand and coalesce, leading to large areas of dead tissue on the leaves. In severe cases, the leaves may turn yellow and eventually die, leading to defoliation of the plant. ';
        break;
      case 'Corn_(maize)___healthy':
        message = 'Corn (maize) Leaf is Healthy';
        break;
      case 'Tomato__Target_Spot':
        message = 'Symptoms: Target spot, caused by the fungus Corynespora cassiicola, is a disease that affects tomato plants.  Leaf symptoms: Leaf symptoms of target spot on tomato plants typically involve the development of circular to irregularly shaped lesions. These lesions often have a concentric ring pattern, resembling a target or bullseye. Initially, the lesions appear as small, water-soaked spots on the leaves. As the disease progresses, these spots enlarge and turn brown or black. The centers of the lesions may become necrotic and drop out, leaving behind shot-hole-like damage. Severe infections can lead to extensive defoliation, weakening the plant and reducing fruit yield.';
        break;
      case 'Tomato__Tomato_YellowLeaf__Curl_Virus':
        message = 'Symptoms: Tomato Yellow Leaf Curl Virus (TYLCV) is a viral disease that affects tomato plants.  Leaf symptoms: Leaf symptoms of Tomato Yellow Leaf Curl Virus (TYLCV) include: 1)Yellowing of the leaves: The leaves of infected plants typically turn yellow, starting from the lower leaves and progressing upward 2)Upward curling: The leaves may exhibit an upward curling or cupping, giving them a distinctive distorted appearance. 3)Thickened texture: Infected leaves may become thickened or leathery in texture compared to healthy leaves.';
        break;
      case 'Tomato_Septoria_leaf_spot':
        message = 'Symptoms: ';
        break;
      case 'Pepper,_bell___healthy':
        message = 'Pepper bell Leaf is Healthy ';
        break;
      case 'Tomato_Septoria_leaf_spot':
        message = 'Symptoms: Tomato Septoria Leaf Spot, caused by the fungus Septoria lycopersici, is a common disease affecting tomato plants. Leaf symptoms: Small circular spots: These spots usually start as small, circular lesions on the lower leaves of the tomato plant. Light green or yellow color: Initially, the spots may appear as light green or yellow in color. Darkening: Over time, the spots darken to become dark brown or black.';
        break;
      case 'Corn_(maize)_Cercospora_leaf_spot Gray_leaf_spot':
        message = 'Symptoms: Cercospora Leaf Spot and Gray Leaf Spot are two distinct diseases affecting corn (maize) plants, caused by different fungi. Here are the symptoms for each: Cercospora Leaf Spot (Cercospora zeae-maydis): Leaf lesions: Circular to oval-shaped lesions develop on corn leaves, initially appearing tan or light brown with a reddish-brown border. Lesion enlargement: As the disease progresses, lesions expand and may merge, leading to extensive necrosis of leaf tissue. ';
        break;
      case 'Tomato_Spider_mites_Two_spotted_spider_mite':
        message = 'Symptoms: Tomato plants infested with Two-spotted spider mites exhibit several symptoms: Yellow stippling: The upper surface of leaves may show tiny, yellowish spots, known as stippling, caused by the mites piercing leaf cells and sucking out their contents. Webbing: Infested plants may have fine silk webbing on the underside of leaves, particularly in heavy infestations.';
        break;
      case 'Grape___Black_rot':
        message = 'Symptoms: Grape Black Rot, caused by the fungus Guignardia bidwellii, manifests through several symptoms: Lesions on leaves: Circular to irregular brown or black lesions appear on grape leaves. These lesions typically have a well-defined border and may expand over time. Fruit lesions: Similar lesions develop on grape berries, initially appearing small and brown, later enlarging and turning black. As the disease progresses, berries may shrivel and become mummified, often remaining attached to the vine.';
        break;
      case 'Corn_(maize)___Northern_Leaf_Blight':
        message = 'Symptoms: Northern Leaf Blight, caused by the fungus Exserohilum turcicum, affects corn (maize) plants. Symptoms include: Lesions on leaves: Long, elliptical lesions develop on corn leaves, typically starting on lower leaves and progressing upward.Tan to brown color: Lesions initially appear tan and water-soaked but eventually turn brown as they mature.';
      case 'Apple___Cedar_apple_rust':
        message = 'Symptoms:Cedar apple rust is a fungal disease that affects apple trees and cedar trees. Here are some symptoms of Cedar apple rust: he most characteristic symptom of cedar apple rust is the formation of round, brownish-orange galls on infected juniper or cedar trees. These galls are usually about 1/4 to 1 inch in diameter and can be found on the branches.'; 
        
        break;
      default:
        message = '';
        break;
    }
    return message ? <div className="text-2xl border border-white rounded-md p-6">{message}</div> : null;
  };
  

  return (
    <section className="text-gray-600 body-font relative" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col relative z-25">
        {imageUrl && (
          <div className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 relative">
            <img className="w-full h-full object-cover object-center rounded border-8 border-white" alt="hero" src={imageUrl} />
          </div>
        )}
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-5xl text-4xl mb-4 font-semibold text-white" style={{ fontFamily: 'Georgia' }}>Upload to Predict the Crop</h1>
          <p className="mb-8 leading-relaxed sm:text-2xl text-xl text-white">"Protecting Harvests, Preserving Futures: Detecting Crop Diseases for a Flourishing Agriculture"</p>
          <div className="flex justify-center">
            <input type="file" onChange={handleFileChange} className="hidden" id="uploadMRI" />
            <label htmlFor="uploadMRI" className="inline-flex font-bold  text-white bg-green-600 border-0 py-3 px-6 focus:outline-none hover:bg-green-600 rounded text-xl m-2 cursor-pointer">Upload Image</label>
            <button onClick={handleSubmit} className="inline-flex font-bold  text-white bg-green-600 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded text-xl m-2">Predict</button>
          </div>
          {result && <p className="mb-8 mt-5 leading-relaxed font-bold text-3xl text-green-300 ">Prediction: {result}</p>}
          {message && <p className="mb-6 leading-relaxed font-bold text-2xl text-white">{message}</p>}
        </div>
      </div>
    </section>
  );
};

export default PotatoDiseaseDetection;

