import { Link } from 'react-router-dom'
import 'katex/dist/katex.min.css'
import { InlineMath } from 'react-katex'

// Import project images
import cathedral from '../../../assets/cs280a/proj1/cathedral_colorized.jpg'
import cathedralOriginal from '../../../assets/cs280a/proj1/cathedral_original.jpg'
import church from '../../../assets/cs280a/proj1/church_colorized.jpg'
import emir from '../../../assets/cs280a/proj1/emir_colorized.jpg'
import harvesters from '../../../assets/cs280a/proj1/harvesters_colorized.jpg'
import icon from '../../../assets/cs280a/proj1/icon_colorized.jpg'
import italil from '../../../assets/cs280a/proj1/italil_colorized.jpg'
import lastochikino from '../../../assets/cs280a/proj1/lastochikino_colorized.jpg'
import lugano from '../../../assets/cs280a/proj1/lugano_colorized.jpg'
import melons from '../../../assets/cs280a/proj1/melons_colorized.jpg'
import monastery from '../../../assets/cs280a/proj1/monastery_colorized.jpg'
import monasteryOriginal from '../../../assets/cs280a/proj1/monastery_original.jpg'
import selfPortrait from '../../../assets/cs280a/proj1/self_portrait_colorized.jpg'
import siren from '../../../assets/cs280a/proj1/siren_colorized.jpg'
import threeGenerations from '../../../assets/cs280a/proj1/three_generations_colorized.jpg'
import tobolsk from '../../../assets/cs280a/proj1/tobolsk_colorized.jpg'
import tobolskOriginal from '../../../assets/cs280a/proj1/tobolsk_original.jpg'
import cropVisualization from '../../../assets/cs280a/proj1/proj1_crop_function_visualization.png'
import cropComparison from '../../../assets/cs280a/proj1/proj1_crop_comparison_emir.png'
import whiteBalance from '../../../assets/cs280a/proj1/proj1_white_balance.png'
import ilemselga from '../../../assets/cs280a/proj1/ilemselga_colorized.jpg'
import sudna from '../../../assets/cs280a/proj1/sudna_colorized.jpg'
import bridge from '../../../assets/cs280a/proj1/bridge_colorized.jpg'
import finalEnhancement from '../../../assets/cs280a/proj1/proj1_final_enhancement.png'

function Project1() {
  const results = [
    { name: 'Church', image: church, greenOffset: '(24, 3)', redOffset: '(58, -4)' },
    { name: 'Emir', image: emir, greenOffset: '(48, 24)', redOffset: '(105, 42)' },
    { name: 'Harvesters', image: harvesters, greenOffset: '(56, 12)', redOffset: '(124, 12)' },
    { name: 'Icon', image: icon, greenOffset: '(39, 16)', redOffset: '(88, 22)' },
    { name: 'Italil', image: italil, greenOffset: '(38, 21)', redOffset: '(76, 35)' },
    { name: 'Lastochikino', image: lastochikino, greenOffset: '(-2, -2)', redOffset: '(76, -10)' },
    { name: 'Lugano', image: lugano, greenOffset: '(40, -17)', redOffset: '(92, -28)' },
    { name: 'Melons', image: melons, greenOffset: '(78, 8)', redOffset: '(176, 12)' },
    { name: 'Self Portrait', image: selfPortrait, greenOffset: '(76, 28)', redOffset: '(174, 36)' },
    { name: 'Siren', image: siren, greenOffset: '(48, -6)', redOffset: '(96, -24)' },
    { name: 'Three Generations', image: threeGenerations, greenOffset: '(54, 12)', redOffset: '(112, 8)' },
  ]

  const additionalResults = [
    { name: 'Ilemselga', image: ilemselga, greenOffset: '(39, 6)', redOffset: '(130, 10)' },
    { name: 'Sudna', image: sudna, greenOffset: '(42, 38)', redOffset: '(132, 80)' },
    { name: 'Bridge', image: bridge, greenOffset: '(12, -13)', redOffset: '(68, 5)' },
  ]

  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Project 1: Images of the Russian Empire
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
          Colorizing the Prokudin-Gorskii Photo Collection
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          CS280A: Intro to Computer Vision and Computational Photography
        </p>
        <div className="prose prose-lg max-w-none">
          <a href="https://cal-cs180.github.io/fa25/hw/proj1/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-lg hover:text-blue-800 underline">
            Official CS280A Project 1 page
          </a>
        </div>
      </div>

      {/* Project Overview */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Project Overview</h2>
        <div className="max-w-6xl mx-auto mb-8">
          <p className="text-lg text-gray-700 mb-6 text-left">
              This project focuses on automatically producing color images from digitized Prokudin-Gorskii glass plate images. 
              Sergei Mikhailovich Prokudin-Gorskii (1863-1944) was a pioneer of color photography who captured thousands of 
              color pictures of the Russian Empire by recording three exposures of every scene using red, green, and blue filters.
            </p>
          <p className="text-lg text-gray-700 text-left">
            The goal of this project is to extract the three color channel images, place them on top of each other, and align them to form 
            a single RGB color image with minimal visual interference between the channels. Ultimately, we will develop an algorithm to take 
            any 3-channel image as input and produce an aligned, colorized, cropped, and white-balanced color image as output.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 w-full">
          <div className="flex flex-col">
            <img 
              src={cathedralOriginal} 
              alt="Cathedral Original" 
              className="w-full h-[80vh] object-contain mb-2"
            />
            <h3 className="text-xl font-semibold text-gray-900 text-center">Cathedral</h3>
          </div>
          
          <div className="flex flex-col">
            <img 
              src={monasteryOriginal} 
              alt="Monastery Original" 
              className="w-full h-[80vh] object-contain mb-2"
            />
            <h3 className="text-xl font-semibold text-gray-900 text-center">Monastery</h3>
            </div>
          
          <div className="flex flex-col">
            <img 
              src={tobolskOriginal} 
              alt="Tobolsk Original" 
              className="w-full h-[80vh] object-contain mb-2"
            />
            <h3 className="text-xl font-semibold text-gray-900 text-center">Tobolsk</h3>
          </div>
        </div>
            </div>
            

      {/* Getting Started Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Getting Started: The Initial Approach</h2>
        <div className="max-w-6xl mx-auto mb-8">
          <p className="text-lg text-left text-gray-700 mb-8">
            The initial approach focused on three JPG test images to develop and validate the alignment algorithms. 
            With these images, I first implemented a single-scale version of the alignment algorithm using for-loops
            and exhaustively searching over a pre-specified window of displacements.
          </p>
          <p className="text-lg text-left text-gray-700 mb-8">
            Since this initial approach was simple, I could test several different image matching / alignment metrics 
            and investigate which ones formed the "best" overlaid color image. These metrics were:
          </p>
           <ul className="text-lg text-left text-gray-700 mb-8 list-disc list-inside space-y-4">
             <li>
               <strong>Squared L2-Norm (Euclidean Distance) / Sum of Squared Differences (SSD):</strong>
               <ul className="ml-6 mt-2 space-y-2 list-disc list-inside text-base">
                 <li>
                   <strong>Formula:</strong>
                   <div className="my-2">
                     <InlineMath math="SSD = \sum_{i,j} (I_1(i,j) - I_2(i,j))^2" />
                   </div>
                 </li>
                 <li>
                   <strong>How it works:</strong> For each pixel position (i,j), we calculate the squared difference between the pixel values in the two images, then sum all these squared differences. Lower SSD values indicate better alignment.
                 </li>
                 <li>
                   We will compute the SSD (squared L2-norm) over L2-norm as the sqrt function can be computationally expensive. 
                   Since the sqrt function is monotonically increasing, minimizing the SSD will result in the same minimum point 
                   as minimizing the L2-norm.
                 </li>
              </ul>
             </li>
             <li>
               <strong>Normalized Cross-Correlation (NCC):</strong>
               <ul className="ml-6 mt-2 space-y-2 list-disc list-inside text-base">
                 <li>
                   <strong>Formula:</strong>
                   <div className="my-2">
                     <InlineMath math="NCC = \frac{\sum_{i,j} I_1(i,j) \cdot I_2(i,j)}{\sqrt{\sum_{i,j} I_1^2(i,j) \sum_{i,j} I_2^2(i,j)}}" />
            </div>
                 </li>
                 <li>
                   <strong>How it works:</strong> NCC computes the dot product between the two images normalized by their individual magnitudes. 
                   This creates a value between -1 and 1, where 1 indicates perfect positive correlation, 0 indicates no correlation, and -1 
                   indicates perfect negative correlation. The normalization makes it invariant to linear brightness changes.
                 </li>
              </ul>
             </li>
             <li>
               <strong>Phase Correlation:</strong>
               <ul className="ml-6 mt-2 space-y-2 list-disc list-inside text-base">
                 <li>
                   <strong>Formula:</strong>
                   <div className="my-2">
                     <InlineMath math="PhaseCorr = \mathcal{F}^{-1}\left(\frac{\mathcal{F}(I_1) \cdot \mathcal{F}(I_2)^*}{|\mathcal{F}(I_1) \cdot \mathcal{F}(I_2)^*|}\right)" />
            </div>
                 </li>
                 <li>
                   <strong>How it works:</strong> Phase correlation converts images to the frequency domain, 
                   compares the translational alignment there, and then converts back to find where the images 
                   best match. It is very fast and works great for find a baseline image's translational shift to match another image.
                 </li>
               </ul>
             </li>
             <li>
               <strong>Intersection over Union (IoU):</strong>
               <ul className="ml-6 mt-2 space-y-2 list-disc list-inside text-base">
                 <li>
                   <strong>Formula:</strong>
                   <div className="my-2">
                     <InlineMath math="IoU = \frac{|I_1 \cap I_2|}{|I_1 \cup I_2|}" />
          </div>
                 </li>
                 <li>
                   <strong>How it works:</strong> IoU calculates the ratio of the intersection (pixels that are non-zero in both images) to the union 
                   (pixels that are non-zero in either image) of the two images. The result ranges from 0 to 1, where 1 indicates perfect overlap and 
                   0 indicates no overlap. This metric is particularly useful when working with binary masks or when you want to focus on the overlap 
                   of specific features rather than pixel-wise intensity differences.
                 </li>
               </ul>
             </li>
           </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            <div>
            <div className="relative group">
              <img 
                src={cathedral} 
                alt="Cathedral" 
                className="w-full object-contain"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-white text-sm p-4 text-center">
                  <div className="font-semibold mb-2">Alignment Metrics Results</div>
                  <div className="space-y-1">
                    <div>SSD: Green (5, 2), Red (12, 3)</div>
                    <div>NCC: Green (5, 2), Red (12, 3)</div>
                    <div>Phase Corr: Green (4, 1), Red (11, 3)</div>
                    <div>IoU: Green (5, 2), Red (12, 3)</div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mt-2">Cathedral</h3>
                    </div>
          
          <div>
            <div className="relative group">
              <img 
                src={monastery} 
                alt="Monastery" 
                className="w-full object-contain"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-white text-sm p-4 text-center">
                  <div className="font-semibold mb-2">Alignment Metrics Results</div>
                  <div className="space-y-1">
                    <div>SSD: Green (-3, 2), Red (3, 2)</div>
                    <div>NCC: Green (-3, 2), Red (3, 2)</div>
                    <div>Phase Corr: Green (-3, 1), Red (2, 2)</div>
                    <div>IoU: Green (-3, 2), Red (3, 2)</div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mt-2">Monastery</h3>
            </div>

            <div>
            <div className="relative group">
              <img 
                src={tobolsk} 
                alt="Tobolsk" 
                className="w-full object-contain"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-white text-sm p-4 text-center">
                  <div className="font-semibold mb-2">Alignment Metrics Results</div>
                  <div className="space-y-1">
                    <div>SSD: Green (3, 3), Red (6, 3)</div>
                    <div>NCC: Green (3, 3), Red (6, 3)</div>
                    <div>Phase Corr: Green (2, 2), Red (6, 3)</div>
                    <div>IoU: Green (3, 3), Red (6, 3)</div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mt-2">Tobolsk</h3>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-lg text-left text-gray-700">
            Based on these results, I chose to move forward with the Phase Correlation alignment metric. 
            It provided the best results, both in manual visual inspection, as well as in terms of lowest channel displacement.
                </p>
              </div>
              </div>
              
      {/* Technical Approach: Automatic Alignment & Cropping */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technical Approach</h2>
        <div className="max-w-6xl mx-auto mb-8">
          <p className="text-lg text-left text-gray-700 mb-4">
            In this section, I will describe the various technical approaches I took to implement pyramid-based alignment for larger-scale (.tif) images. 
            Additionally, I will also describe the "bells & whistles" I implemented for automatic cropping, contrasting, and white-balancing the images.
            While implementing these techniques, I explored more intelligent ways of better aligning the images, such as edge detection, pixel agreement, and gradients. 
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cropping Functions</h2>
          <p className="text-lg text-left text-gray-700">
            After images have been aligned, we want to introduce cropping to clean up remaining misalignments at the image border. I implemented 3 different cropping functions, going in increasing order of complexity.
          </p>
          <br />
          <ul className="text-lg text-left text-gray-700 mb-8 list-disc list-inside space-y-4">
            <li>
              The first approach is a simple <strong>manual cropping function</strong> where you can specify the number of pixels to crop on the top, bottom, left, and right sides of the image
            </li>
            <li>
              The second approach is an <strong>automatic approach</strong>, which detects the image's focus and primary content and crops around it. This is done by converting the image to grayscale 
              and applying the <strong>Canny edge detector (OpenCV)</strong> to generate a binary map of high-contrast structural edges in the image. Next, we can <strong>use these edges to generate a 
                minimal bounding box</strong> that includes all edges, thus cropping the least important parts of the image away.
              <ul className="ml-6 mt-2 space-y-2 list-disc list-inside text-base">
                <li>This can be sensitive with noisy images where objects near the image border are incorrectly classified as "important", preventing a good crop</li>
                <li>This can also be sensitive with images where there is a clear central focus (e.g. The Emir), and can inadvertently crop more of the background objects than desired</li>
              </ul>
            </li>
            <li>
              The third approach is the more <strong>robust automatic approach</strong>, using a custom algorithm to crop images based on the <strong>"agreement" between its different color channels (R, G, B)</strong>. 
              After manual observation on aligned images, I realized that croppable parts of the borders often tainted the image with differently colored hues (red, blue, yellow, etc.) because not all 
              of the 3 color layers were properly aligned at those points. Therefore, the strategy of this approach is based on the central, most important parts of the image to have highly correlated 
              color channels, while misaligned border regions will have lower correlation. The detailed steps of the algorithm are specified in the Colab Notebook.
            </li>
          </ul>
          <div className="mb-8">
            <img 
              src={cropVisualization} 
              alt="Crop Function Visualization" 
              className="w-full object-contain mb-4"
            />
            <p className="text-lg text-left text-gray-700 mb-4">
              This visualization demonstrates the functionality of the robust automatic cropping algorithm. 
              It first generates the raw disagreement map between color channels, then applies a Gaussian blur to smooth the map,
              and finally applies a pixel standard deviation threshold to generate a binary mask and determine "good" regions with high alignment.
            </p>
            <p className="text-lg text-left text-gray-700">
              It works well on the border regions of the image, where the color channels are not perfectly aligned. However, it also inevitably flags
              the more rich and colorful parts of the image as "bad" regions, such as the Emir's robes. The approach of this algorithm is perhaps well-suited
              for images with a clear central focus, like this one, but may not perform as well for other images in the Prokudin-Gorskii collection.
                </p>
              </div>
              
          <div className="mb-8">
            <img 
              src={cropComparison} 
              alt="Crop Comparison - Emir Image" 
              className="w-full object-contain mb-4"
            />
            <p className="text-lg text-left text-gray-700">
              After cropping, the final image is visually much cleaner, with the problematic top-border now discarded. This algorithm could also be improved
              to consider both regions with high disagreement as well as regions with extremely high agreement (i.e. black and white borders) to produce an even cleaner result.
                </p>
              </div>
          <h3 className="text-xl text-left font-semibold text-gray-900 mb-4">Key Ideas and References</h3>
          <p className="text-lg text-left text-gray-700">
            From Szeliski, R. (2010). Computer Vision: Algorithms and Applications:
          </p>
          <ul className="text-lg text-left text-gray-700 mb-8 list-disc list-inside space-y-2">
            <li>Section 3.2 and 3.2.1 for image filtering and separable filtering such as Gaussian filtering</li>
            <li>Section 5.1.3 for segmentation and binary image analysis, which led me to use OpenCV functions for finding contours and fitting bounding boxes around them</li>
          </ul>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Automatic White-Balancing</h2>
          <p className="text-lg text-left text-gray-700 mb-4">
            After cropping, we want to white-balance the image to ensure that we can counteract the effects of the illuminant light source in the image 
            and simulate a neutral illuminant, to accurately reproduce the original scene. I implemented a simple, yet effective approach using the Gray World Algorithm.
            The assumption of this algorithm is that the average color of an image with rich color variations should be gray (achromatic).
          </p>
          <div className="mb-8">
            <img 
              src={whiteBalance} 
              alt="White Balance Visualization" 
              className="w-full object-contain mb-4"
            />
            <p className="text-lg text-left text-gray-700 mb-4">
              This visualization demonstrates the effect of the Gray World Algorithm on white balancing. The left panel shows the original image with 
              color cast from the illuminant, while the right panel shows the white-balanced result. Looking closely at the result, we can see that the
              faint blue hues on the mountainside, buildings, and trees have been corrected to produce more natural-looking colors.
            </p>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Automatic Color Balancing and Contrast</h2>
          <p className="text-lg text-left text-gray-700 mb-4">
            After white balancing, the final step in the image enhancement pipeline is automatic color balancing and contrast adjustment. 
            I implemented the <strong>Percentile Stretch Algorithm</strong> to improve the overall visual quality of the colorized images.
            This algorithm calculates pre-specified percentile values (used 2nd and 98th percentiles) for each color channel, and then 
            stretches the histogram to use the full dynamic range by mapping these percentiles to 0 and 255. This improves mid-tone contrast 
            and overall image brightness.
          </p>
          <div className="mb-8">
            <img 
              src={finalEnhancement} 
              alt="Final Enhancement Visualization" 
              className="w-full object-contain mb-4"
            />
          </div>
        </div>
      </div>

      {/* Results Gallery */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Final Results</h2>
        <div className="max-w-6xl mx-auto mb-8">
          <p className="text-lg text-left text-gray-700">
            All 14 images from the Prokudin-Gorskii collection, successfully colorized using the alignment algorithms. 
            Each image shows the calculated displacement offsets for the Green and Red channels relative to the Blue channel.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto">
          {results.map((result, index) => (
            <div key={index}>
              <div className="relative group">
                <img 
                  src={result.image} 
                  alt={result.name} 
                  className="w-full object-contain"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-white text-sm p-4 text-center">
                    <div className="font-semibold mb-2">Alignment Results</div>
                    <div className="space-y-1">
                      <div>Green: {result.greenOffset}</div>
                      <div>Red: {result.redOffset}</div>
                </div>
              </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-2 text-center">{result.name}</h3>
            </div>
          ))}
            </div>
          </div>

      {/* Additional Testing */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Additional Testing</h2>
        <div className="max-w-6xl mx-auto mb-8">
          <p className="text-lg text-left text-gray-700">
            To further validate my image processing pipeline, I selected three random additional images from 
            the Prokudin-Gorskii collection. I chose these images because they present different scenes and objects,
            from a variety of distances and angles.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto">
          {additionalResults.map((result, index) => (
            <div key={index}>
              <div className="relative group">
                <img 
                  src={result.image} 
                  alt={result.name} 
                  className="w-full object-contain"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-white text-sm p-4 text-center">
                    <div className="font-semibold mb-2">Alignment Results</div>
                    <div className="space-y-1">
                      <div>Green: {result.greenOffset}</div>
                      <div>Red: {result.redOffset}</div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-2 text-center">{result.name}</h3>
            </div>
          ))}
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

export default Project1
