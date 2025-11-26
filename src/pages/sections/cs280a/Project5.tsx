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
  visualAnagramSkew
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
        <p className="text-lg text-gray-600 mb-8">
          CS280A: Intro to Computer Vision and Computational Photography
        </p>
        <div className="prose prose-lg max-w-none">
          <a href="https://cal-cs180.github.io/fa25/hw/proj5/parta.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-lg hover:text-blue-800 underline">
            Official CS280A Project 5 Part A page
          </a>
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
          </ul>
          <p className="text-lg text-gray-700 text-left">
            Diffusion models work by learning to reverse a forward process that gradually adds noise to images. Starting from 
            pure noise, the model iteratively denoises to generate realistic images that match text prompts.
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
