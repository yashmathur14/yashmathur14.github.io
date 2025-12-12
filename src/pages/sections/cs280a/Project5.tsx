import { Link } from 'react-router-dom'
import 'katex/dist/katex.min.css'
import { InlineMath, BlockMath } from 'react-katex'

// Import project images
import { 
  promptImage1,
  promptImage2,
  promptImage3,
  forwardProcess,
  samplingLoop1_2,
  samplingLoop1_3,
  samplingLoop1_4_A,
  samplingLoop1_4_B,
  samplingLoop1_5,
  samplingLoop1_5_2,
  samplingLoop1_6_campanile,
  samplingLoop1_6_fuji,
  samplingLoop1_6_kyoto,
  sdeditWebImage,
  sdeditHandDrawn1,
  sdeditHandDrawn2,
  inpaintingCampanileMask,
  inpaintingCampanileInpainted,
  inpaintingMountainMask,
  inpaintingMountainInpainted,
  inpaintingBeachMask,
  inpaintingBeachInpainted,
  textConditionalCampanile,
  textConditionalMountain,
  textConditionalFloridaKeys,
  visualAnagram1,
  visualAnagram2,
  visualAnagram3,
  visualAnagram4,
  visualAnagram5,
  visualAnagram6,
  visualAnagram7,
  visualAnagram8,
  hybridImage1,
  hybridImage2,
  hybridImage3,
  logo1,
  logo2,
  logo3,
  visualAnagramThreeAxes,
  visualAnagramSkew,
  partB1_1_unet,
  partB1_1_standardOps,
  partB1_2_noising,
  partB1_2_multipleDigits,
  partB1_2_1_trainingLoss,
  partB1_2_1_multipleDigits,
  partB1_2_2_digit0,
  partB1_2_2_digit1,
  partB1_2_2_digit2,
  partB1_2_2_digit3,
  partB1_2_2_digit4,
  partB1_2_2_digit5,
  partB1_2_2_digit6,
  partB1_2_2_digit7,
  partB1_2_2_digit8,
  partB1_2_2_digit9,
  partB1_2_3_trainingLoss,
  partB1_2_3_sampleResults,
  partB2_2_trainingLoss,
  partB2_3_samplingResults,
  partB2_5_trainingLoss,
  partB2_6_ep1,
  partB2_6_ep5,
  partB2_6_ep10,
  partB2_6_noSchedulerEp1,
  partB2_6_noSchedulerEp5,
  partB2_6_noSchedulerEp10,
  partB3_bellsAndWhistles
} from '../../../assets/cs280a/proj5'

function Project5() {
  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Project 5: The Power of Diffusion Models!
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
          Part A: Diffusion Models for Image Generation and Editing
        </h2>
        <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
          Part B: Flow Matching from Scratch
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          CS280A: Intro to Computer Vision and Computational Photography
        </p>
        <div className="prose prose-lg max-w-none space-y-2">
          <div>
            <a href="https://cal-cs180.github.io/fa25/hw/proj5/parta.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-lg hover:text-blue-800 underline">
              Official CS280A Project 5 Part A page
            </a>
          </div>
          <div>
            <a href="https://cal-cs180.github.io/fa25/hw/proj5/partb.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-lg hover:text-blue-800 underline">
              Official CS280A Project 5 Part B page
            </a>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Project Overview</h2>
        <div className="max-w-6xl mx-auto mb-8">
          <p className="text-lg text-gray-700 text-left mb-4">
            This project explores diffusion models, a powerful class of generative models that can create high-quality images 
            from text prompts. We use the DeepFloyd IF diffusion model, a two-stage model that first produces 64×64 images 
            and then upscales them to 256×256. The project is divided into several parts:
          </p>
          <ul className="text-lg text-gray-700 text-left mb-6 list-disc list-inside space-y-2">
            <li><strong>Part A0</strong> focuses on setup and exploring the pre-trained model with custom text prompts</li>
            <li><strong>Part A1</strong> implements sampling loops and extends them for various tasks like inpainting and optical illusions</li>
            <li><strong>Part A2</strong> includes bells and whistles for CS280A students</li>
            <li><strong>Part B1</strong> trains a single-step denoising UNet on MNIST digits</li>
            <li><strong>Part B2</strong> implements flow matching from scratch with time and class conditioning</li>
            <li><strong>Part B3</strong> includes bells and whistles for CS280A students</li>
          </ul>
          <p className="text-lg text-gray-700 text-left">
            Diffusion models work by learning to reverse a forward process that gradually adds noise to images. Starting from 
            pure noise, the model iteratively denoises to generate realistic images that match text prompts. In Part B, we build 
            and train our own UNet architecture from scratch to perform flow matching on MNIST digits, learning the fundamentals 
            of generative model training.
          </p>
        </div>
      </div>

      {/* Part A0: Setup */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Part A0: Setup</h2>
        <div className="max-w-6xl mx-auto mb-8">
          <p className="text-lg text-left text-gray-700 mb-6">
            In this part, we set up access to the DeepFloyd IF diffusion model and explore its capabilities by generating 
            images from text prompts. The model requires prompt embeddings, which are high-dimensional vector representations 
            of text that the model can understand.
          </p>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="text-gray-700 text-left">
              <strong>Deliverables:</strong>
            </p>
            <ul className="text-gray-700 text-left mt-2 list-disc list-inside space-y-1">
              <li>Come up with some interesting text prompts and generate their embeddings</li>
              <li>Choose 3 of your prompts to generate images and display the caption and the output of the model</li>
              <li>Reflect on the quality of the outputs and their relationships to the text prompts</li>
              <li>Try at least 2 different <code>num_inference_steps</code> values</li>
              <li>Report the random seed that you're using here (use the same seed for all subsequent parts)</li>
            </ul>
          </div>

          {/* Generated Images Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-left">Generated Images from Text Prompts</h3>
            <p className="text-lg text-left text-gray-700 mb-4">
              Below are 3 selected prompts with their generated images:
            </p>
            
            {/* Image 1 */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2 text-left">Prompt 1: "a 1970s style tourist poster of the Italian Alps"</h4>
              <div className="text-center mb-4">
                <img 
                  src={promptImage1} 
                  alt="1970s style tourist poster of the Italian Alps" 
                  className="w-full max-w-2xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                />
              </div>
              <p className="text-gray-700 text-left">
                <strong>Reflection:</strong> [Analysis of image quality and relationship to prompt will be added here]
              </p>
            </div>

            {/* Image 2 */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2 text-left">Prompt 2: "an oil painting of the girl with the dragon tattoo"</h4>
              <div className="text-center mb-4">
                <img 
                  src={promptImage2} 
                  alt="an oil painting of the girl with the dragon tattoo" 
                  className="w-full max-w-2xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                />
              </div>
              <p className="text-gray-700 text-left">
                <strong>Reflection:</strong> [Analysis of image quality and relationship to prompt will be added here]
              </p>
            </div>

            {/* Image 3 */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2 text-left">Prompt 3: "an oil painting of a snowy mountain village"</h4>
              <div className="text-center mb-4">
                <img 
                  src={promptImage3} 
                  alt="an oil painting of a snowy mountain village" 
                  className="w-full max-w-2xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                />
              </div>
              <p className="text-gray-700 text-left">
                <strong>Reflection:</strong> [Analysis of image quality and relationship to prompt will be added here]
              </p>
            </div>
          </div>

          {/* Random Seed */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-left">Random Seed</h3>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="text-gray-700 text-left">
                <strong>Random Seed:</strong> [Seed value will be reported here. This same seed will be used for all subsequent parts.]
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Part A1: Sampling Loops */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Part A1: Sampling Loops</h2>
        <div className="max-w-6xl mx-auto mb-8">
          <p className="text-lg text-left text-gray-700 mb-6">
            In this part, we implement our own sampling loops that use the pretrained DeepFloyd denoisers to generate 
            high-quality images. We then modify these sampling loops to solve different tasks such as inpainting or 
            producing optical illusions.
          </p>
        </div>

        {/* Part A1.1: Implementing the Forward Process */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Part A1.1: Implementing the Forward Process</h3>
          <div className="max-w-6xl mx-auto mb-8">
            <p className="text-lg text-left text-gray-700 mb-6">
              The forward process takes a clean image and adds noise to it. Given a clean image <InlineMath math="x_0" />, 
              we get a noisy image <InlineMath math="x_t" /> at timestep <InlineMath math="t" /> by sampling from a 
              Gaussian distribution:
            </p>
            <div className="my-4 bg-gray-100 p-4 rounded-lg">
              <BlockMath math="q(x_t | x_0) = \mathcal{N}(x_t ; \sqrt{\bar{\alpha}_t} x_0, (1 - \bar{\alpha}_t)\mathbf{I})" />
            </div>
            <p className="text-lg text-left text-gray-700 mb-4">
              which is equivalent to:
            </p>
            <div className="my-4 bg-gray-100 p-4 rounded-lg">
              <BlockMath math="x_t = \sqrt{\bar{\alpha}_t} x_0 + \sqrt{1 - \bar{\alpha}_t} \epsilon \quad \text{where} \quad \epsilon \sim \mathcal{N}(0, 1)" />
            </div>
            <p className="text-lg text-left text-gray-700 mb-6">
              The forward process scales the image and adds noise. The noise coefficients <InlineMath math="\bar{\alpha}_t" /> 
              are close to 1 for small <InlineMath math="t" /> (clean image) and close to 0 for large <InlineMath math="t" /> (pure noise).
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="text-gray-700 text-left">
                <strong>[Impl]</strong> I implemented the <code className="bg-gray-200 px-2 py-1 rounded">forward(im, t)</code> function 
                that takes an image and timestep, and returns the noisy image at that timestep using the <code>alphas_cumprod</code> 
                variable which contains <InlineMath math="\bar{\alpha}_t" /> for all timesteps.
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-gray-700 text-left">
                <strong>Deliverables:</strong>
              </p>
              <ul className="text-gray-700 text-left mt-2 list-disc list-inside space-y-1">
                <li>Implement the <code>noisy_im = forward(im, t)</code> function</li>
                <li>Show the Campanile at noise levels [250, 500, 750]</li>
              </ul>
            </div>

            {/* Forward Process Results */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 text-left">Forward Process Results: Campanile</h4>
              <div className="text-center">
                <img 
                  src={forwardProcess} 
                  alt="Forward Process Results - Campanile at different noise levels" 
                  className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                />
                <p className="text-sm text-gray-600">Campanile at noise levels t = 250, 500, 750</p>
              </div>
            </div>
          </div>
        </div>

        {/* Part A1.2-A1.6: Additional Sampling Implementations */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Part A1.2-A1.6: Sampling Loop Implementations</h3>
          <div className="max-w-6xl mx-auto mb-8">
            <p className="text-lg text-left text-gray-700 mb-6">
              These parts implement various sampling loop techniques including basic denoising loops, classifier-free guidance (CFG), 
              and iterative denoising with CFG.
            </p>

            {/* Part A1.2 */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 text-left">Part A1.2: Basic Denoising Loop</h4>
              <div className="text-center">
                <img 
                  src={samplingLoop1_2} 
                  alt="Part A1.2 - Basic Denoising Loop Results" 
                  className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                />
                <p className="text-sm text-gray-600">Basic denoising loop implementation results</p>
              </div>
            </div>

            {/* Part A1.3 */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 text-left">Part A1.3: Classifier-Free Guidance</h4>
              <div className="text-center">
                <img 
                  src={samplingLoop1_3} 
                  alt="Part A1.3 - Classifier-Free Guidance Results" 
                  className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                />
                <p className="text-sm text-gray-600">Classifier-free guidance (CFG) implementation results</p>
              </div>
            </div>

            {/* Part A1.4 */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 text-left">Part A1.4: Iterative Denoising with CFG</h4>
              <div className="space-y-6">
                <div className="text-center">
                  <img 
                    src={samplingLoop1_4_A} 
                    alt="Part A1.4 - Iterative Denoising A" 
                    className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                  />
                  <p className="text-sm text-gray-600">Iterative denoising with CFG - Result A</p>
                </div>
                <div className="text-center">
                  <img 
                    src={samplingLoop1_4_B} 
                    alt="Part A1.4 - Iterative Denoising B" 
                    className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                  />
                  <p className="text-sm text-gray-600">Iterative denoising with CFG - Result B</p>
                </div>
              </div>
            </div>

            {/* Part A1.5 */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 text-left">Part A1.5: Advanced Sampling Techniques</h4>
              <div className="space-y-6">
                <div className="text-center">
                  <img 
                    src={samplingLoop1_5} 
                    alt="Part A1.5 - Advanced Sampling 1" 
                    className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                  />
                  <p className="text-sm text-gray-600">Advanced sampling technique - Result 1</p>
                </div>
                <div className="text-center">
                  <img 
                    src={samplingLoop1_5_2} 
                    alt="Part A1.5 - Advanced Sampling 2" 
                    className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                  />
                  <p className="text-sm text-gray-600">Advanced sampling technique - Result 2</p>
                </div>
              </div>
            </div>

            {/* Part A1.6 */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 text-left">Part A1.6: Text-Conditional Image Generation</h4>
              <div className="space-y-6">
                <div className="text-center">
                  <img 
                    src={samplingLoop1_6_campanile} 
                    alt="Part A1.6 - Campanile" 
                    className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                  />
                  <p className="text-sm text-gray-600">Campanile</p>
                </div>
                <div className="text-center">
                  <img 
                    src={samplingLoop1_6_fuji} 
                    alt="Part A1.6 - Fuji" 
                    className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                  />
                  <p className="text-sm text-gray-600">Fuji</p>
                </div>
                <div className="text-center">
                  <img 
                    src={samplingLoop1_6_kyoto} 
                    alt="Part A1.6 - Kyoto" 
                    className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                  />
                  <p className="text-sm text-gray-600">Kyoto</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Part A1.7: Image-to-Image Translation */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Part A1.7: Image-to-Image Translation</h3>
          <div className="max-w-6xl mx-auto mb-8">
            <p className="text-lg text-left text-gray-700 mb-6">
              We can use diffusion models to edit existing images by starting the denoising process from a partially 
              noisy version of the input image. This allows us to project images onto the natural image manifold while 
              preserving some of the original structure.
            </p>

            {/* Part A1.7.1: Editing Hand-Drawn and Web Images */}
            <div className="mb-10">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 text-left">Part A1.7.1: Editing Hand-Drawn and Web Images</h4>
              <p className="text-lg text-left text-gray-700 mb-4">
                SDEdit (Score-based Diffusion Editing) projects images to the natural image manifold by adding noise 
                and then denoising. We start from a noisy version of the input image at timestep <InlineMath math="i_{start}" /> 
                and run the denoising process from there.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <p className="text-gray-700 text-left">
                  <strong>Deliverables:</strong>
                </p>
                <ul className="text-gray-700 text-left mt-2 list-disc list-inside space-y-1">
                  <li>1 image from the web of your choice, edited using the above method for noise levels [1, 3, 5, 7, 10, 20] (and whatever additional noise levels you want)</li>
                  <li>2 hand drawn images, edited using the above method for noise levels [1, 3, 5, 7, 10, 20] (and whatever additional noise levels you want)</li>
                </ul>
              </div>

              {/* SDEdit Results - Web Image */}
              <div className="mb-8">
                <h5 className="text-lg font-semibold text-gray-900 mb-4 text-left">SDEdit Results: Web Image</h5>
                <div className="text-center">
                  <img 
                    src={sdeditWebImage} 
                    alt="SDEdit Results - Web Image at different noise levels" 
                    className="w-full max-w-6xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                  />
                  <p className="text-sm text-gray-600">Web image edited at noise levels [1, 3, 5, 7, 10, 20]</p>
                </div>
              </div>

              {/* SDEdit Results - Hand Drawn Images */}
              <div className="mb-8">
                <h5 className="text-lg font-semibold text-gray-900 mb-4 text-left">SDEdit Results: Hand Drawn Images</h5>
                <div className="space-y-8">
                  <div>
                    <h6 className="text-md font-semibold text-gray-900 mb-2 text-left">Hand Drawn Image 1</h6>
                    <div className="text-center">
                      <img 
                        src={sdeditHandDrawn1} 
                        alt="SDEdit Results - Hand Drawn Image 1 at different noise levels" 
                        className="w-full max-w-6xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                      />
                      <p className="text-sm text-gray-600">Hand drawn image 1 edited at noise levels [1, 3, 5, 7, 10, 20]</p>
                    </div>
                  </div>
                  <div>
                    <h6 className="text-md font-semibold text-gray-900 mb-2 text-left">Hand Drawn Image 2</h6>
                    <div className="text-center">
                      <img 
                        src={sdeditHandDrawn2} 
                        alt="SDEdit Results - Hand Drawn Image 2 at different noise levels" 
                        className="w-full max-w-6xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                      />
                      <p className="text-sm text-gray-600">Hand drawn image 2 edited at noise levels [1, 3, 5, 7, 10, 20]</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Part A1.7.2: Inpainting */}
            <div className="mb-10">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 text-left">Part A1.7.2: Inpainting</h4>
              <p className="text-lg text-left text-gray-700 mb-4">
                Inpainting fills in masked regions of an image. We run the diffusion denoising loop, but at every step, 
                after obtaining <InlineMath math="x_t" />, we "force" <InlineMath math="x_t" /> to have the same pixels 
                as the original image where the mask is 0:
              </p>
              <div className="my-4 bg-gray-100 p-4 rounded-lg">
                <BlockMath math="x_t \leftarrow \mathbf{m} x_t + (1 - \mathbf{m}) \text{forward}(x_{orig}, t)" />
              </div>
              <p className="text-lg text-left text-gray-700 mb-4">
                where <InlineMath math="\mathbf{m}" /> is a binary mask (1 where we want to inpaint, 0 where we preserve the original).
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <p className="text-gray-700 text-left">
                  <strong>Deliverables:</strong>
                </p>
                <ul className="text-gray-700 text-left mt-2 list-disc list-inside space-y-1">
                  <li>A properly implemented <code>inpaint</code> function</li>
                  <li>The Campanile inpainted (feel free to use your own mask)</li>
                  <li>2 of your own images edited (come up with your own mask)</li>
                </ul>
              </div>

              {/* Inpainting Results - Campanile */}
              <div className="mb-8">
                <h5 className="text-lg font-semibold text-gray-900 mb-4 text-left">Inpainting Results: Campanile</h5>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-4">
                  <div className="md:col-span-3 text-center">
                    <img 
                      src={inpaintingCampanileMask} 
                      alt="Campanile Mask" 
                      className="w-full object-contain rounded-lg shadow-lg mb-2"
                    />
                    <p className="text-sm text-gray-600">Mask</p>
                  </div>
                  <div className="text-center">
                    <img 
                      src={inpaintingCampanileInpainted} 
                      alt="Campanile Inpainted" 
                      className="w-full object-contain rounded-lg shadow-lg mb-2"
                    />
                    <p className="text-sm text-gray-600">Inpainted Result</p>
                  </div>
                </div>
              </div>

              {/* Inpainting Results - Custom Images */}
              <div className="mb-8">
                <h5 className="text-lg font-semibold text-gray-900 mb-4 text-left">Inpainting Results: Custom Images</h5>
                <div className="space-y-8">
                  <div>
                    <h6 className="text-md font-semibold text-gray-900 mb-2 text-left">Mountain</h6>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="md:col-span-3 text-center">
                        <img 
                          src={inpaintingMountainMask} 
                          alt="Mountain Mask" 
                          className="w-full object-contain rounded-lg shadow-lg mb-2"
                        />
                        <p className="text-sm text-gray-600">Mask</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src={inpaintingMountainInpainted} 
                          alt="Mountain Inpainted" 
                          className="w-full object-contain rounded-lg shadow-lg mb-2"
                        />
                        <p className="text-sm text-gray-600">Inpainted</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h6 className="text-md font-semibold text-gray-900 mb-2 text-left">Beach</h6>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="md:col-span-3 text-center">
                        <img 
                          src={inpaintingBeachMask} 
                          alt="Beach Mask" 
                          className="w-full object-contain rounded-lg shadow-lg mb-2"
                        />
                        <p className="text-sm text-gray-600">Mask</p>
                      </div>
                      <div className="text-center">
                        <img 
                          src={inpaintingBeachInpainted} 
                          alt="Beach Inpainted" 
                          className="w-full object-contain rounded-lg shadow-lg mb-2"
                        />
                        <p className="text-sm text-gray-600">Inpainted</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Part A1.7.3: Text-Conditional Image-to-image Translation */}
            <div className="mb-10">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 text-left">Part A1.7.3: Text-Conditional Image-to-image Translation</h4>
              <p className="text-lg text-left text-gray-700 mb-4">
                This is similar to SDEdit, but we guide the projection with a text prompt. Instead of using a generic 
                prompt like "a high quality photo", we use specific prompts to control the transformation.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <p className="text-gray-700 text-left">
                  <strong>Deliverables:</strong>
                </p>
                <ul className="text-gray-700 text-left mt-2 list-disc list-inside space-y-1">
                  <li>Edits of the Campanile, using the given prompt at noise levels [1, 3, 5, 7, 10, 20]</li>
                  <li>Edits of 2 of your own test images, using the same procedure</li>
                </ul>
              </div>

              {/* Text-Conditional Results - Campanile */}
              <div className="mb-8">
                <h5 className="text-lg font-semibold text-gray-900 mb-4 text-left">Text-Conditional Results: Campanile</h5>
                <div className="text-center">
                  <img 
                    src={textConditionalCampanile} 
                    alt="Text-Conditional Results - Campanile (Rocket Ship) at different noise levels" 
                    className="w-full max-w-6xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                  />
                  <p className="text-sm text-gray-600">Campanile edited with "rocket ship" prompt at noise levels [1, 3, 5, 7, 10, 20]</p>
                </div>
              </div>

              {/* Text-Conditional Results - Custom Images */}
              <div className="mb-8">
                <h5 className="text-lg font-semibold text-gray-900 mb-4 text-left">Text-Conditional Results: Custom Images</h5>
                <div className="space-y-8">
                  <div>
                    <h6 className="text-md font-semibold text-gray-900 mb-2 text-left">Mountain</h6>
                    <div className="text-center">
                      <img 
                        src={textConditionalMountain} 
                        alt="Text-Conditional Results - Mountain at different noise levels" 
                        className="w-full max-w-6xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                      />
                      <p className="text-sm text-gray-600">Mountain image edited at noise levels [1, 3, 5, 7, 10, 20]</p>
                    </div>
                  </div>
                  <div>
                    <h6 className="text-md font-semibold text-gray-900 mb-2 text-left">Florida Keys</h6>
                    <div className="text-center">
                      <img 
                        src={textConditionalFloridaKeys} 
                        alt="Text-Conditional Results - Florida Keys at different noise levels" 
                        className="w-full max-w-6xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                      />
                      <p className="text-sm text-gray-600">Florida Keys image edited at noise levels [1, 3, 5, 7, 10, 20]</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Part A1.8: Visual Anagrams */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Part A1.8: Visual Anagrams</h3>
          <div className="max-w-6xl mx-auto mb-8">
            <p className="text-lg text-left text-gray-700 mb-4">
              Visual anagrams create images that look like one thing when viewed normally, but reveal a different image 
              when flipped upside down. The algorithm works by:
            </p>
            <ol className="text-lg text-left text-gray-700 mb-4 list-decimal list-inside space-y-2">
              <li>Denoising <InlineMath math="x_t" /> normally with prompt <InlineMath math="p_1" /> to get noise estimate <InlineMath math="\epsilon_1" /></li>
              <li>Flipping <InlineMath math="x_t" /> upside down, denoising with prompt <InlineMath math="p_2" /> to get <InlineMath math="\epsilon_2" /></li>
              <li>Flipping <InlineMath math="\epsilon_2" /> back and averaging: <InlineMath math="\epsilon = (\epsilon_1 + \epsilon_2) / 2" /></li>
              <li>Performing a reverse diffusion step with the averaged noise estimate</li>
            </ol>
            <div className="my-4 bg-gray-100 p-4 rounded-lg">
              <div className="text-gray-700 text-left space-y-1">
                <p><InlineMath math="\epsilon_1 = \text{CFG of UNet}(x_t, t, p_1)" /></p>
                <p><InlineMath math="\epsilon_2 = \text{flip}(\text{CFG of UNet}(\text{flip}(x_t), t, p_2))" /></p>
                <p><InlineMath math="\epsilon = (\epsilon_1 + \epsilon_2) / 2" /></p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-gray-700 text-left">
                <strong>Deliverables:</strong>
              </p>
              <ul className="text-gray-700 text-left mt-2 list-disc list-inside space-y-1">
                <li>Correctly implemented <code>visual_anagrams</code> function</li>
                <li>2 illusions of your choice that change appearance when you flip it upside down</li>
              </ul>
            </div>

            {/* Visual Anagrams Results */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 text-left">Visual Anagrams Results</h4>
              <div className="space-y-8">
                {/* Example: Old Man / People Around Campfire */}
                <div>
                  <h5 className="text-md font-semibold text-gray-900 mb-2 text-left">Example: Old Man / People Around Campfire</h5>
                  <div className="text-center mb-4">
                    <img 
                      src={visualAnagram1} 
                      alt="Visual Anagram - Old Man and People Around Campfire" 
                      className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                    />
                  </div>
                  <p className="text-gray-700 text-left">
                    This example demonstrates the visual anagram technique with prompts contrasting a Renaissance European 
                    oil painting style (showing an old man) with a more modern campfire scene (people around a fire). 
                    When viewed normally, the image appears as a classical oil painting portrait, but when flipped upside 
                    down, it reveals a contemporary scene of people gathered around a campfire. This contrast highlights 
                    how the diffusion model can blend different artistic styles and temporal contexts into a single 
                    coherent visual illusion.
                  </p>
                </div>

                {/* Same Image, Different Seeds */}
                <div>
                  <h5 className="text-md font-semibold text-gray-900 mb-2 text-left">Same Image with Different Seeds</h5>
                  <p className="text-gray-700 text-left mb-4">
                    Prompts: <strong>"a cyberpunk city skyline at night"</strong> and <strong>"a glowing forest of bioluminescent mushrooms"</strong>
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="text-center">
                      <img 
                        src={visualAnagram3} 
                        alt="Visual Anagram - Seed 1" 
                        className="w-full object-contain rounded-lg shadow-lg mb-2"
                      />
                      <p className="text-sm text-gray-600">Seed 1</p>
                    </div>
                    <div className="text-center">
                      <img 
                        src={visualAnagram4} 
                        alt="Visual Anagram - Seed 2" 
                        className="w-full object-contain rounded-lg shadow-lg mb-2"
                      />
                      <p className="text-sm text-gray-600">Seed 2</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-left mt-4">
                    The same visual anagram prompt produces different results when using different random seeds, 
                    demonstrating the stochastic nature of the diffusion process while maintaining the core 
                    visual anagram structure. Interestingly, on the left (Seed 1), the upright orientation looks 
                    more accurate towards the first prompt ("a cyberpunk city skyline at night"), while on the 
                    right (Seed 2), the flipped orientation looks more accurate towards the second prompt 
                    ("a glowing forest of bioluminescent mushrooms"). This shows how different seeds can 
                    emphasize different aspects of the dual-prompt visual anagram.
                  </p>
                </div>

                {/* Custom Visual Anagrams - One per row */}
                <div>
                  <h5 className="text-md font-semibold text-gray-900 mb-2 text-left">Custom Visual Anagram 1</h5>
                  <div className="text-center">
                    <img 
                      src={visualAnagram2} 
                      alt="Custom Visual Anagram 1" 
                      className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                    />
                  </div>
                </div>

                <div>
                  <h5 className="text-md font-semibold text-gray-900 mb-2 text-left">Custom Visual Anagram 2</h5>
                  <div className="text-center">
                    <img 
                      src={visualAnagram5} 
                      alt="Custom Visual Anagram 2" 
                      className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                    />
                  </div>
                </div>

                <div>
                  <h5 className="text-md font-semibold text-gray-900 mb-2 text-left">Custom Visual Anagram 3</h5>
                  <div className="text-center">
                    <img 
                      src={visualAnagram6} 
                      alt="Custom Visual Anagram 3" 
                      className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                    />
                  </div>
                </div>

                <div>
                  <h5 className="text-md font-semibold text-gray-900 mb-2 text-left">Custom Visual Anagram 4</h5>
                  <div className="text-center">
                    <img 
                      src={visualAnagram7} 
                      alt="Custom Visual Anagram 4" 
                      className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                    />
                  </div>
                </div>

                <div>
                  <h5 className="text-md font-semibold text-gray-900 mb-2 text-left">Custom Visual Anagram 5</h5>
                  <div className="text-center">
                    <img 
                      src={visualAnagram8} 
                      alt="Custom Visual Anagram 5" 
                      className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Part A1.9: Hybrid Images */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Part A1.9: Hybrid Images</h3>
          <div className="max-w-6xl mx-auto mb-8">
            <p className="text-lg text-left text-gray-700 mb-4">
              Hybrid images combine low frequencies from one prompt with high frequencies from another, similar to Project 2. 
              The algorithm creates a composite noise estimate by:
            </p>
            <ol className="text-lg text-left text-gray-700 mb-4 list-decimal list-inside space-y-2">
              <li>Estimating noise with two different text prompts: <InlineMath math="\epsilon_1" /> and <InlineMath math="\epsilon_2" /></li>
              <li>Combining low frequencies from <InlineMath math="\epsilon_1" /> with high frequencies from <InlineMath math="\epsilon_2" /></li>
            </ol>
            <div className="my-4 bg-gray-100 p-4 rounded-lg">
              <div className="text-gray-700 text-left space-y-1">
                <p><InlineMath math="\epsilon_1 = \text{CFG of UNet}(x_t, t, p_1)" /></p>
                <p><InlineMath math="\epsilon_2 = \text{CFG of UNet}(x_t, t, p_2)" /></p>
                <p><InlineMath math="\epsilon = f_{\text{lowpass}}(\epsilon_1) + f_{\text{highpass}}(\epsilon_2)" /></p>
              </div>
            </div>
            <p className="text-lg text-left text-gray-700 mb-4">
              We recommend using a Gaussian blur with kernel size 33 and sigma 2 for the low/high pass filters.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-gray-700 text-left">
                <strong>Deliverables:</strong>
              </p>
              <ul className="text-gray-700 text-left mt-2 list-disc list-inside space-y-1">
                <li>Correctly implemented <code>make_hybrids</code> function</li>
                <li>2 hybrid images of your choosing</li>
              </ul>
            </div>

            {/* Hybrid Images Results */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 text-left">Hybrid Images Results</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <img 
                    src={hybridImage1} 
                    alt="Hybrid Image 1" 
                    className="w-full object-contain rounded-lg shadow-lg mb-2"
                  />
                  <p className="text-sm text-gray-600">Hybrid Image 1</p>
                </div>
                <div className="text-center">
                  <img 
                    src={hybridImage2} 
                    alt="Hybrid Image 2" 
                    className="w-full object-contain rounded-lg shadow-lg mb-2"
                  />
                  <p className="text-sm text-gray-600">Hybrid Image 2</p>
                </div>
                <div className="text-center">
                  <img 
                    src={hybridImage3} 
                    alt="Hybrid Image 3" 
                    className="w-full object-contain rounded-lg shadow-lg mb-2"
                  />
                  <p className="text-sm text-gray-600">Hybrid Image 3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Part A2: Bells & Whistles */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Part A2: Bells & Whistles</h2>
        <div className="max-w-6xl mx-auto mb-8">
          <p className="text-lg text-gray-700 text-left mb-6">
            <strong>Required for CS280A students:</strong>
          </p>
          <ul className="text-lg text-gray-700 text-left mb-6 list-disc list-inside space-y-2">
            <li><strong>More visual anagrams!</strong> Visual anagrams in part A1.8 are created by flipping images upside down. 
            However, there are much more transformations that also create visual anagrams! Refer to the paper and select 
            two more transformations to create visual anagrams.</li>
            <li><strong>Design a course logo!</strong> Doing text-conditioned image-to-image translation on UCB's logo or 
            your drawing may be a good idea.</li>
          </ul>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="text-gray-700 text-left">
              <strong>Deliverables:</strong> Show results for bells and whistles implementations.
            </p>
          </div>

          {/* Bells & Whistles Results */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-left">Additional Visual Anagrams</h3>
            <div className="space-y-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 text-left">Transformation 1: Three Axes</h4>
                <p className="text-gray-700 text-left mb-4">
                  Based on the <a href="https://arxiv.org/pdf/2311.17919" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Visual Anagrams paper</a>, 
                  this visual anagram uses a three-axis transformation, creating an image that reveals different content 
                  when viewed from different orientations. This extends the concept of visual anagrams beyond simple 
                  flips to more complex orthogonal transformations.
                </p>
                <div className="text-center">
                  <img 
                    src={visualAnagramThreeAxes} 
                    alt="Visual Anagram - Three Axes Transformation" 
                    className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                  />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 text-left">Transformation 2: Skew</h4>
                <p className="text-gray-700 text-left mb-4">
                  This visual anagram uses a skew transformation, another orthogonal transformation that creates 
                  multi-view illusions. The image changes appearance when the skew transformation is applied, 
                  demonstrating the flexibility of the visual anagram approach with different geometric transformations.
                </p>
                <div className="text-center">
                  <img 
                    src={visualAnagramSkew} 
                    alt="Visual Anagram - Skew Transformation" 
                    className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                  />
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-left">Course Logo Design</h3>
            <p className="text-gray-700 text-left mb-4">
              Using text-conditioned image-to-image translation, I applied different prompts to UCB's logo to create 
              creative variations. Each logo maintains the recognizable structure of the original while incorporating 
              different artistic styles and themes.
            </p>
            <div className="mb-8">
              <div className="space-y-6">
                <div className="text-center">
                  <img 
                    src={logo1} 
                    alt="Course Logo Design 1" 
                    className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                  />
                  <p className="text-sm text-gray-600">Logo Design 1</p>
                </div>
                <div className="text-center">
                  <img 
                    src={logo2} 
                    alt="Course Logo Design 2" 
                    className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                  />
                  <p className="text-sm text-gray-600">Logo Design 2</p>
                </div>
                <div className="text-center">
                  <img 
                    src={logo3} 
                    alt="Course Logo Design 3" 
                    className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                  />
                  <p className="text-sm text-gray-600">Logo Design 3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Part B: Flow Matching from Scratch */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Part B: Flow Matching from Scratch</h2>
        <div className="max-w-6xl mx-auto mb-8">
          <p className="text-lg text-gray-700 text-left mb-6">
            In Part B, we train our own flow matching model on MNIST from scratch. We build and train a UNet architecture 
            to perform denoising and flow matching, learning the fundamentals of generative model training. This part covers 
            single-step denoising, time-conditioned flow matching, and class-conditioned generation.
          </p>
        </div>

        {/* Part B1: Training a Single-Step Denoising UNet */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Part B1: Training a Single-Step Denoising UNet</h2>
          <div className="max-w-6xl mx-auto mb-8">
            <p className="text-lg text-left text-gray-700 mb-6">
              We start by building a simple one-step denoiser. Given a noisy image <InlineMath math="z" />, we aim to train 
              a denoiser <InlineMath math="D_\theta" /> such that it maps <InlineMath math="z" /> to a clean image <InlineMath math="x" />. 
              We optimize over an L2 loss:
            </p>
            <div className="my-4 bg-gray-100 p-4 rounded-lg">
              <BlockMath math="L = \mathbb{E}_{z,x} \|D_{\theta}(z) - x\|^2" />
            </div>

            {/* Part B1.1: Implementing the UNet */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Part B1.1: Implementing the UNet</h3>
              <div className="max-w-6xl mx-auto mb-8">
                <p className="text-lg text-left text-gray-700 mb-6">
                  In this project, we implement the denoiser as a UNet. It consists of downsampling and upsampling blocks 
                  with skip connections. The UNet uses standard operations including Conv2d, BatchNorm2d, GELU activation, 
                  ConvTranspose2d for upsampling, and AvgPool2d for downsampling.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                  <p className="text-gray-700 text-left">
                    <strong>[Impl]</strong> I implemented the UNet architecture with the following components:
                  </p>
                  <ul className="text-gray-700 text-left mt-2 list-disc list-inside space-y-1">
                    <li><strong>Conv</strong>: Convolutional layer that doesn't change image resolution, only channel dimension</li>
                    <li><strong>DownConv</strong>: Convolutional layer that downsamples the tensor by 2</li>
                    <li><strong>UpConv</strong>: Convolutional layer that upsamples the tensor by 2</li>
                    <li><strong>Flatten</strong>: Average pooling layer that flattens a 7×7 tensor into a 1×1 tensor</li>
                    <li><strong>Unflatten</strong>: Convolutional layer that unflattens/upsamples a 1×1 tensor into a 7×7 tensor</li>
                    <li><strong>Concat</strong>: Channel-wise concatenation between tensors with the same 2D shape</li>
                  </ul>
                </div>

                {/* UNet Architecture Visualizations */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 text-left">Unconditional UNet Architecture</h4>
                  <div className="space-y-6">
                    <div className="text-center">
                      <img 
                        src={partB1_1_unet} 
                        alt="UNet architecture diagram" 
                        className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                      />
                      <p className="text-sm text-gray-600">UnconditionalUNet Architecture</p>
                    </div>
                    <div className="text-center">
                      <img 
                        src={partB1_1_standardOps} 
                        alt="Standard UNet operations" 
                        className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                      />
                      <p className="text-sm text-gray-600">Standard UNet Operations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Part B1.2: Using the UNet to Train a Denoiser */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Part B1.2: Using the UNet to Train a Denoiser</h3>
              <div className="max-w-6xl mx-auto mb-8">
                <p className="text-lg text-left text-gray-700 mb-6">
                  To train our denoiser, we need to generate training data pairs of (<InlineMath math="z" />, <InlineMath math="x" />), 
                  where each <InlineMath math="x" /> is a clean MNIST digit. For each training batch, we generate <InlineMath math="z" /> 
                  from <InlineMath math="x" /> using the following noising process:
                </p>
                <div className="my-4 bg-gray-100 p-4 rounded-lg">
                  <BlockMath math="z = x + \sigma \epsilon, \quad \text{where } \epsilon \sim \mathcal{N}(0, I)" />
                </div>
                <p className="text-lg text-left text-gray-700 mb-6">
                  We visualize the different noising processes over <InlineMath math="\sigma = [0.0, 0.2, 0.4, 0.5, 0.6, 0.8, 1.0]" />, 
                  assuming normalized <InlineMath math="x \in [0, 1]" />. You should see noisier images as <InlineMath math="\sigma" /> increases.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <p className="text-gray-700 text-left">
                    <strong>Deliverables:</strong>
                  </p>
                  <ul className="text-gray-700 text-left mt-2 list-disc list-inside space-y-1">
                    <li>A visualization of the noising process using <InlineMath math="\sigma = [0.0, 0.2, 0.4, 0.5, 0.6, 0.8, 1.0]" /></li>
                  </ul>
                </div>

                {/* Noising Process Visualization */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 text-left">Noising Process Visualization</h4>
                  <div className="space-y-6">
                    <div className="text-center">
                      <img 
                        src={partB1_2_noising} 
                        alt="Noising process visualization with σ = [0.0, 0.2, 0.4, 0.5, 0.6, 0.8, 1.0]" 
                        className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                      />
                      <p className="text-sm text-gray-600">Noising process with σ = [0.0, 0.2, 0.4, 0.5, 0.6, 0.8, 1.0]</p>
                    </div>
                    <div className="text-center">
                      <img 
                        src={partB1_2_multipleDigits} 
                        alt="Noising process visualization for multiple digits" 
                        className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                      />
                      <p className="text-sm text-gray-600">Noising process for multiple digits</p>
                    </div>
                  </div>
                </div>

                {/* Part B1.2.1: Training */}
                <div className="mb-10">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 text-left">Part B1.2.1: Training</h4>
                  <p className="text-lg text-left text-gray-700 mb-4">
                    We train the model to perform denoising on noisy images <InlineMath math="z" /> with <InlineMath math="\sigma = 0.5" /> 
                    applied to clean images <InlineMath math="x" />. We use the MNIST dataset, train for 5 epochs with batch size 256, 
                    and use the Adam optimizer with learning rate 1e-4.
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                    <p className="text-gray-700 text-left">
                      <strong>Deliverables:</strong>
                    </p>
                    <ul className="text-gray-700 text-left mt-2 list-disc list-inside space-y-1">
                      <li>A training loss curve plot every few iterations during the whole training process of <InlineMath math="\sigma = 0.5" /></li>
                      <li>Sample results on the test set with noise level 0.5 after the first and the 5-th epoch</li>
                    </ul>
                  </div>

                  {/* Training Loss Curve */}
                  <div className="mb-8">
                    <h5 className="text-lg font-semibold text-gray-900 mb-4 text-left">Training Loss Curve</h5>
                    <div className="text-center">
                      <img 
                        src={partB1_2_1_trainingLoss} 
                        alt="Training loss curve for σ = 0.5 denoising" 
                        className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                      />
                      <p className="text-sm text-gray-600">Training loss curve for σ = 0.5 denoising</p>
                    </div>
                  </div>

                  {/* Sample Results */}
                  <div className="mb-8">
                    <h5 className="text-lg font-semibold text-gray-900 mb-4 text-left">Sample Results on Test Set</h5>
                    <div className="text-center">
                      <img 
                        src={partB1_2_1_multipleDigits} 
                        alt="Sample denoised results for multiple digits after epoch 1 and epoch 5" 
                        className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                      />
                      <p className="text-sm text-gray-600">Sample results on test set with noise level 0.5 after epoch 1 and epoch 5</p>
                    </div>
                  </div>
                </div>

                {/* Part B1.2.2: Out-of-Distribution Testing */}
                <div className="mb-10">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 text-left">Part B1.2.2: Out-of-Distribution Testing</h4>
                  <p className="text-lg text-left text-gray-700 mb-4">
                    Our denoiser was trained on MNIST digits noised with <InlineMath math="\sigma = 0.5" />. Let's see how the 
                    denoiser performs on different <InlineMath math="\sigma" />'s that it wasn't trained for.
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                    <p className="text-gray-700 text-left">
                      <strong>Deliverables:</strong>
                    </p>
                    <ul className="text-gray-700 text-left mt-2 list-disc list-inside space-y-1">
                      <li>Sample results on the test set with out-of-distribution noise levels after the model is trained. Keep the same image and vary <InlineMath math="\sigma = [0.0, 0.2, 0.4, 0.5, 0.6, 0.8, 1.0]" /></li>
                    </ul>
                  </div>

                  {/* OOD Results */}
                  <div className="mb-8">
                    <h5 className="text-lg font-semibold text-gray-900 mb-4 text-left">Out-of-Distribution Results</h5>
                    <div className="space-y-6">
                      <div className="text-center">
                        <h6 className="text-md font-semibold text-gray-900 mb-2">Digit 0</h6>
                        <img 
                          src={partB1_2_2_digit0} 
                          alt="Denoising results for digit 0 with varying noise levels σ = [0.0, 0.2, 0.4, 0.5, 0.6, 0.8, 1.0]" 
                          className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                        />
                      </div>
                      <div className="text-center">
                        <h6 className="text-md font-semibold text-gray-900 mb-2">Digit 1</h6>
                        <img 
                          src={partB1_2_2_digit1} 
                          alt="Denoising results for digit 1 with varying noise levels σ = [0.0, 0.2, 0.4, 0.5, 0.6, 0.8, 1.0]" 
                          className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                        />
                      </div>
                      <div className="text-center">
                        <h6 className="text-md font-semibold text-gray-900 mb-2">Digit 2</h6>
                        <img 
                          src={partB1_2_2_digit2} 
                          alt="Denoising results for digit 2 with varying noise levels σ = [0.0, 0.2, 0.4, 0.5, 0.6, 0.8, 1.0]" 
                          className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                        />
                      </div>
                      <div className="text-center">
                        <h6 className="text-md font-semibold text-gray-900 mb-2">Digit 3</h6>
                        <img 
                          src={partB1_2_2_digit3} 
                          alt="Denoising results for digit 3 with varying noise levels σ = [0.0, 0.2, 0.4, 0.5, 0.6, 0.8, 1.0]" 
                          className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                        />
                      </div>
                      <div className="text-center">
                        <h6 className="text-md font-semibold text-gray-900 mb-2">Digit 4</h6>
                        <img 
                          src={partB1_2_2_digit4} 
                          alt="Denoising results for digit 4 with varying noise levels σ = [0.0, 0.2, 0.4, 0.5, 0.6, 0.8, 1.0]" 
                          className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                        />
                      </div>
                      <div className="text-center">
                        <h6 className="text-md font-semibold text-gray-900 mb-2">Digit 5</h6>
                        <img 
                          src={partB1_2_2_digit5} 
                          alt="Denoising results for digit 5 with varying noise levels σ = [0.0, 0.2, 0.4, 0.5, 0.6, 0.8, 1.0]" 
                          className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                        />
                      </div>
                      <div className="text-center">
                        <h6 className="text-md font-semibold text-gray-900 mb-2">Digit 6</h6>
                        <img 
                          src={partB1_2_2_digit6} 
                          alt="Denoising results for digit 6 with varying noise levels σ = [0.0, 0.2, 0.4, 0.5, 0.6, 0.8, 1.0]" 
                          className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                        />
                      </div>
                      <div className="text-center">
                        <h6 className="text-md font-semibold text-gray-900 mb-2">Digit 7</h6>
                        <img 
                          src={partB1_2_2_digit7} 
                          alt="Denoising results for digit 7 with varying noise levels σ = [0.0, 0.2, 0.4, 0.5, 0.6, 0.8, 1.0]" 
                          className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                        />
                      </div>
                      <div className="text-center">
                        <h6 className="text-md font-semibold text-gray-900 mb-2">Digit 8</h6>
                        <img 
                          src={partB1_2_2_digit8} 
                          alt="Denoising results for digit 8 with varying noise levels σ = [0.0, 0.2, 0.4, 0.5, 0.6, 0.8, 1.0]" 
                          className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                        />
                      </div>
                      <div className="text-center">
                        <h6 className="text-md font-semibold text-gray-900 mb-2">Digit 9</h6>
                        <img 
                          src={partB1_2_2_digit9} 
                          alt="Denoising results for digit 9 with varying noise levels σ = [0.0, 0.2, 0.4, 0.5, 0.6, 0.8, 1.0]" 
                          className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                        />
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 text-center mt-4">Denoising results with varying noise levels σ = [0.0, 0.2, 0.4, 0.5, 0.6, 0.8, 1.0] for each digit</p>
                  </div>
                </div>

                {/* Part B1.2.3: Denoising Pure Noise */}
                <div className="mb-10">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 text-left">Part B1.2.3: Denoising Pure Noise</h4>
                  <p className="text-lg text-left text-gray-700 mb-4">
                    To make denoising a generative task, we'd like to be able to denoise pure, random Gaussian noise. We can 
                    think of this as starting with a blank canvas <InlineMath math="z = \epsilon" /> where <InlineMath math="\epsilon \sim \mathcal{N}(0, I)" /> 
                    and denoising it to get a clean image <InlineMath math="x" />.
                  </p>
                  <p className="text-lg text-left text-gray-700 mb-4">
                    We repeat the same training process as in part B1.2.1, but input pure noise <InlineMath math="\epsilon \sim \mathcal{N}(0, I)" /> 
                    and denoise it for 5 epochs.
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                    <p className="text-gray-700 text-left">
                      <strong>Deliverables:</strong>
                    </p>
                    <ul className="text-gray-700 text-left mt-2 list-disc list-inside space-y-1">
                      <li>A training loss curve plot every few iterations during the whole training process that denoises pure noise</li>
                      <li>Sample results on pure noise after the first and the 5-th epoch</li>
                      <li>A brief description of the patterns observed in the generated outputs and explanations for why they may exist</li>
                    </ul>
                  </div>

                  {/* Pure Noise Training Loss */}
                  <div className="mb-8">
                    <h5 className="text-lg font-semibold text-gray-900 mb-4 text-left">Training Loss Curve (Pure Noise)</h5>
                    <div className="text-center">
                      <img 
                        src={partB1_2_3_trainingLoss} 
                        alt="Training loss curve for pure noise denoising" 
                        className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                      />
                      <p className="text-sm text-gray-600">Training loss curve for pure noise denoising</p>
                    </div>
                  </div>

                  {/* Pure Noise Results */}
                  <div className="mb-8">
                    <h5 className="text-lg font-semibold text-gray-900 mb-4 text-left">Sample Results on Pure Noise</h5>
                    <div className="text-center">
                      <img 
                        src={partB1_2_3_sampleResults} 
                        alt="Sample results from pure noise after epoch 1 and epoch 5" 
                        className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                      />
                      <p className="text-sm text-gray-600">Sample results on pure noise after epoch 1 and epoch 5</p>
                    </div>
                  </div>

                  {/* Pattern Analysis */}
                  <div className="mb-8">
                    <h5 className="text-lg font-semibold text-gray-900 mb-4 text-left">Pattern Analysis</h5>
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                      <div className="text-gray-700 text-left space-y-3">
                        <p>
                          <strong>Loss Curve Analysis:</strong> The loss curve for pure noise denoising shows rapid initial convergence and then stabilizes around an MSE loss of 0.06 to 0.07. This indicates the model successfully learned a consistent function.
                        </p>
                        <p>
                          <strong>Epoch Comparison:</strong> Comparing Epoch 1 (E1) vs. Epoch 5 (E5): The images become noticeably sharper and more defined by Epoch 5, suggesting the model is settling on a robust output.
                        </p>
                        <p>
                          <strong>Generated Pattern:</strong> The outputs do not resemble any specific digit (0-9). Instead, they are all nearly identical, centered, blurry grey blobs that look like the average of all MNIST digits.
                        </p>
                        <p>
                          <strong>Explanation:</strong> This confirms the model has learned to predict the unconditional expected value of the clean data, which is the centroid of the data distribution, as the optimal solution for minimizing the MSE loss when the input noise is independent of the target image.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Part B2: Flow Matching from Scratch */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Part B2: Flow Matching from Scratch</h2>
          <div className="max-w-6xl mx-auto mb-8">
            <p className="text-lg text-left text-gray-700 mb-6">
              In this part, we extend our UNet to perform flow matching. We add time conditioning to the UNet so it can predict 
              flows at different timesteps, enabling iterative denoising from pure noise to clean images. We then add class 
              conditioning to enable controlled generation of specific digits.
            </p>

            {/* Part B2.1: Adding Time Conditioning to UNet */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Part B2.1: Adding Time Conditioning to UNet</h3>
              <div className="max-w-6xl mx-auto mb-8">
                <p className="text-lg text-left text-gray-700 mb-6">
                  We need a way to inject scalar <InlineMath math="t" /> into our UNet model to condition it. We use FCBlock 
                  (fully-connected block) to inject the conditioning signal into the UNet. The conditioning signal <InlineMath math="t" /> 
                  is normalized to be in the range [0, 1] and embedded through FCBlocks.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                  <p className="text-gray-700 text-left">
                    <strong>[Impl]</strong> I implemented time conditioning by:
                  </p>
                  <ul className="text-gray-700 text-left mt-2 list-disc list-inside space-y-1">
                    <li>Adding FCBlock components to embed the time signal <InlineMath math="t" /></li>
                    <li>Modulating the unflatten and up1 layers with the embedded time signals</li>
                    <li>Normalizing <InlineMath math="t" /> to the range [0, 1] before embedding</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Part B2.2: Training the UNet */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Part B2.2: Training the UNet</h3>
              <div className="max-w-6xl mx-auto mb-8">
                <p className="text-lg text-left text-gray-700 mb-6">
                  Training our time-conditioned UNet <InlineMath math="u_\theta(x_t, t)" /> involves picking a random image 
                  <InlineMath math="x_1" /> from the training set, a random timestep <InlineMath math="t" />, adding noise to 
                  <InlineMath math="x_1" /> to get <InlineMath math="x_t" />, and training the model to predict the flow at 
                  <InlineMath math="x_t" />. We use batch size 64, hidden dimension D = 64, Adam optimizer with initial learning 
                  rate 1e-2, and an exponential learning rate decay scheduler.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <p className="text-gray-700 text-left">
                    <strong>Deliverables:</strong>
                  </p>
                  <ul className="text-gray-700 text-left mt-2 list-disc list-inside space-y-1">
                    <li>A training loss curve plot for the time-conditioned UNet over the whole training process</li>
                  </ul>
                </div>

                {/* Training Loss Curve */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 text-left">Training Loss Curve</h4>
                  <div className="text-center">
                    <img 
                      src={partB2_2_trainingLoss} 
                      alt="Training loss curve for time-conditioned UNet" 
                      className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                    />
                    <p className="text-sm text-gray-600">Training loss curve for time-conditioned UNet</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Part B2.3: Sampling from the UNet */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Part B2.3: Sampling from the UNet</h3>
              <div className="max-w-6xl mx-auto mb-8">
                <p className="text-lg text-left text-gray-700 mb-6">
                  We can now use our UNet for iterative denoising. Starting from pure noise, we iteratively apply the flow prediction 
                  to denoise the image step by step. The results should not be perfect, but legible digits should emerge.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <p className="text-gray-700 text-left">
                    <strong>Deliverables:</strong>
                  </p>
                  <ul className="text-gray-700 text-left mt-2 list-disc list-inside space-y-1">
                    <li>Sampling results from the time-conditioned UNet for 1, 5, and 10 epochs. The results should not be perfect, but reasonably good.</li>
                  </ul>
                </div>

                {/* Sampling Results */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 text-left">Sampling Results</h4>
                  <div className="text-center">
                    <img 
                      src={partB2_3_samplingResults} 
                      alt="Sampling results from time-conditioned UNet after epochs 1, 5, and 10" 
                      className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                    />
                    <p className="text-sm text-gray-600">Sampling results from time-conditioned UNet after epochs 1, 5, and 10</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Part B2.4: Adding Class-Conditioning to UNet */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Part B2.4: Adding Class-Conditioning to UNet</h3>
              <div className="max-w-6xl mx-auto mb-8">
                <p className="text-lg text-left text-gray-700 mb-6">
                  To make the results better and give us more control for image generation, we can also condition our UNet on the 
                  class of the digit 0-9. We implement class-conditioning by adding 2 more FCBlocks to our UNet. For class-conditioning 
                  vector <InlineMath math="c" />, we make it a one-hot vector. Because we still want our UNet to work without being 
                  conditioned on the class (recall classifier-free guidance), we implement dropout where 10% of the time 
                  (<InlineMath math="p_{\text{uncond}} = 0.1" />) we drop the class conditioning vector <InlineMath math="c" /> by 
                  setting it to 0.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                  <p className="text-gray-700 text-left">
                    <strong>[Impl]</strong> I implemented class conditioning by:
                  </p>
                  <ul className="text-gray-700 text-left mt-2 list-disc list-inside space-y-1">
                    <li>Adding FCBlock components for class embedding</li>
                    <li>Using one-hot vectors for class representation</li>
                    <li>Implementing dropout with <InlineMath math="p_{\text{uncond}} = 0.1" /> for unconditional generation</li>
                    <li>Modulating unflatten and up1 layers with combined time and class signals</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Part B2.5: Training the UNet */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Part B2.5: Training the UNet</h3>
              <div className="max-w-6xl mx-auto mb-8">
                <p className="text-lg text-left text-gray-700 mb-6">
                  Training for this section is the same as time-only conditioning, with the only difference being the conditioning 
                  vector <InlineMath math="c" /> and doing unconditional generation periodically. We train for 10 epochs.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <p className="text-gray-700 text-left">
                    <strong>Deliverables:</strong>
                  </p>
                  <ul className="text-gray-700 text-left mt-2 list-disc list-inside space-y-1">
                    <li>A training loss curve plot for the class-conditioned UNet over the whole training process</li>
                  </ul>
                </div>

                {/* Training Loss Curve */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 text-left">Training Loss Curve</h4>
                  <div className="text-center">
                    <img 
                      src={partB2_5_trainingLoss} 
                      alt="Training loss curve for class-conditioned UNet" 
                      className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                    />
                    <p className="text-sm text-gray-600">Training loss curve for class-conditioned UNet</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Part B2.6: Sampling from the UNet */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Part B2.6: Sampling from the UNet</h3>
              <div className="max-w-6xl mx-auto mb-8">
                <p className="text-lg text-left text-gray-700 mb-6">
                  Now we sample with class-conditioning and use classifier-free guidance with <InlineMath math="\gamma = 5.0" />. 
                  Class-conditioning lets us converge faster, hence why we only train for 10 epochs.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <p className="text-gray-700 text-left">
                    <strong>Deliverables:</strong>
                  </p>
                  <ul className="text-gray-700 text-left mt-2 list-disc list-inside space-y-1">
                    <li>Sampling results from the class-conditioned UNet for 1, 5, and 10 epochs. Generate 4 instances of each digit as shown in the spec.</li>
                    <li>Can we get rid of the annoying learning rate scheduler? Simplicity is the best. Please try to maintain the same performance after removing the exponential learning rate scheduler. Show your visualization after training without the scheduler and provide a description of what you did to compensate for the loss of the scheduler.</li>
                  </ul>
                </div>

                {/* Sampling Results */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 text-left">Sampling Results</h4>
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-md font-semibold text-gray-900 mb-2 text-left">After Epoch 1</h5>
                      <div className="text-center">
                        <img 
                          src={partB2_6_ep1} 
                          alt="Sampling results after epoch 1 - 4 instances of each digit 0-9" 
                          className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                        />
                        <p className="text-sm text-gray-600">Sampling results after epoch 1 - 4 instances of each digit 0-9</p>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-md font-semibold text-gray-900 mb-2 text-left">After Epoch 5</h5>
                      <div className="text-center">
                        <img 
                          src={partB2_6_ep5} 
                          alt="Sampling results after epoch 5 - 4 instances of each digit 0-9" 
                          className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                        />
                        <p className="text-sm text-gray-600">Sampling results after epoch 5 - 4 instances of each digit 0-9</p>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-md font-semibold text-gray-900 mb-2 text-left">After Epoch 10</h5>
                      <div className="text-center">
                        <img 
                          src={partB2_6_ep10} 
                          alt="Sampling results after epoch 10 - 4 instances of each digit 0-9" 
                          className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                        />
                        <p className="text-sm text-gray-600">Sampling results after epoch 10 - 4 instances of each digit 0-9</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Learning Rate Scheduler Removal */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 text-left">Learning Rate Scheduler Removal</h4>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                    <div className="text-gray-700 text-left space-y-3">
                      <p>
                        <strong>Solution:</strong> Making the model wider (num_hiddens=128) is the much better bet.
                      </p>
                      <p>
                        <strong>Capacity vs. Convergence:</strong> The baseline model (hidden dim 64) is quite small. It likely underfits the data, meaning it physically lacks the neurons to represent the complex patterns of all 10 digits purely from time conditioning. Training an underpowered model for longer (30 epochs) usually yields diminishing returns—it hits a "performance ceiling" early.
                      </p>
                      <p>
                        <strong>Immediate Impact:</strong> Doubling the width (64 → 128) quadruples the capacity in many layers (since parameters scale quadratically in linear layers). This allows the model to capture much finer details and cleaner strokes within the same number of epochs.
                      </p>
                      <p>
                        <strong>Efficiency:</strong> A wider model might take slightly longer per epoch (maybe ~3.5 mins instead of 3), but 15 epochs of a wide model will almost certainly look better than 30 epochs of a narrow one.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-md font-semibold text-gray-900 mb-2 text-left">After Epoch 1 (No Scheduler)</h5>
                      <div className="text-center">
                        <img 
                          src={partB2_6_noSchedulerEp1} 
                          alt="Sampling results after epoch 1 without scheduler" 
                          className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                        />
                        <p className="text-sm text-gray-600">Sampling results after epoch 1 without scheduler</p>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-md font-semibold text-gray-900 mb-2 text-left">After Epoch 5 (No Scheduler)</h5>
                      <div className="text-center">
                        <img 
                          src={partB2_6_noSchedulerEp5} 
                          alt="Sampling results after epoch 5 without scheduler" 
                          className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                        />
                        <p className="text-sm text-gray-600">Sampling results after epoch 5 without scheduler</p>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-md font-semibold text-gray-900 mb-2 text-left">After Epoch 10 (No Scheduler)</h5>
                      <div className="text-center">
                        <img 
                          src={partB2_6_noSchedulerEp10} 
                          alt="Sampling results after epoch 10 without scheduler" 
                          className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                        />
                        <p className="text-sm text-gray-600">Sampling results after epoch 10 without scheduler</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Part B3: Bells & Whistles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Part B3: Bells & Whistles</h2>
          <div className="max-w-6xl mx-auto mb-8">
            <p className="text-lg text-gray-700 text-left mb-6">
              <strong>Required for CS280A students:</strong>
            </p>
            <ul className="text-lg text-gray-700 text-left mb-6 list-disc list-inside space-y-2">
              <li><strong>A better time-conditioned only UNet:</strong> Our time-conditioning only UNet in part B2.3 is actually far from perfect. 
              Its result is way worse than the UNet conditioned by both time and class. We can definitively make it better! Show a better 
              visualization image for the time-conditioning only network. Possible approaches include extending the training schedule or 
              making the architecture more expressive.</li>
            </ul>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-gray-700 text-left">
                <strong>Deliverables:</strong> Show results for bells and whistles implementations.
              </p>
            </div>

            {/* Bells & Whistles Results */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-left">Better Time-Conditioned Only UNet</h3>
              <div className="mb-8">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                  <p className="text-gray-700 text-left">
                    To improve the time-conditioned only UNet, I increased the model width from 64 to 128 hidden dimensions. The baseline model 
                    with 64 hidden dimensions is quite small and likely underfits the data—it physically lacks the neurons to represent the complex 
                    patterns of all 10 digits purely from time conditioning. Training this underpowered model for longer (e.g., 30 epochs) usually 
                    yields diminishing returns as it hits a "performance ceiling" early. In contrast, doubling the width to 128 quadruples the 
                    capacity in many layers since parameters scale quadratically in linear layers, allowing the model to capture much finer details 
                    and cleaner strokes within the same number of epochs. While a wider model might take slightly longer per epoch (approximately 
                    3.5 minutes instead of 3), 15 epochs of the wider model produces significantly better results than 30 epochs of the narrow baseline, 
                    making the architectural upgrade more effective than simply extending the training schedule.
                  </p>
                </div>

                <div className="text-center">
                  <img 
                    src={partB3_bellsAndWhistles} 
                    alt="Better time-conditioned UNet results with wider architecture" 
                    className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                  />
                  <p className="text-sm text-gray-600">Improved time-conditioned UNet results with wider architecture (num_hiddens=128)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Back to Portfolio */}
      <div className="text-center mt-16">
        <Link 
          to="/cs280a" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to CS280A Portfolio
        </Link>
      </div>
    </div>
  )
}

export default Project5
