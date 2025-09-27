import { Link } from 'react-router-dom'
import 'katex/dist/katex.min.css'
import { InlineMath } from 'react-katex'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

// Import project images
import convFromScratch from '../../../assets/cs280a/proj2/conv_from_scratch.png'
import originalDxDy from '../../../assets/cs280a/proj2/original_dx_dy.png'
import cowl from '../../../assets/cs280a/proj2/cowl.png'
import cameramanEdgeDetection from '../../../assets/cs280a/proj2/cameraman_edge_detection_steps.png'
import yashGradientMagnitude from '../../../assets/cs280a/proj2/yash_gradient_magnitude.png'
import blurredEdgeDetectionCameraman from '../../../assets/cs280a/proj2/blurred_edge_detection_cameraman.png'
import blurredEdgeDetectionYash from '../../../assets/cs280a/proj2/blurred_edge_detection_yash.png'
import verificationCameraman from '../../../assets/cs280a/proj2/verification_cameraman_DoG.png'
import verificationYash from '../../../assets/cs280a/proj2/verification_yash_DoG.png'
import cameramanHsv from '../../../assets/cs280a/proj2/cameraman_hsv.png'
import yashHsv from '../../../assets/cs280a/proj2/yash_hsv.png'
import tajSharpened from '../../../assets/cs280a/proj2/taj_sharpened.png'
import fujiSharpened from '../../../assets/cs280a/proj2/fuji_sharpened.png'
import blurThenSharpenSphinx from '../../../assets/cs280a/proj2/blur_then_sharpen_sphinx.png'
import orapleDeconstructed from '../../../assets/cs280a/proj2/oraple_deconstructed.png'
import orapleBlendingProcess from '../../../assets/cs280a/proj2/oraple_blending_process.png'
import derekNutmeg2 from '../../../assets/cs280a/proj2/derek_nutmeg_2.png'
import derekGaussian from '../../../assets/cs280a/proj2/derek_gaussian.png'
import derekLaplacian from '../../../assets/cs280a/proj2/derek_laplacian.png'
import coleDrogba from '../../../assets/cs280a/proj2/cole_drogba.png'
import coleDrogbaGaussian from '../../../assets/cs280a/proj2/cole_drogba_gaussian.png'
import coleDrogbaLaplacian from '../../../assets/cs280a/proj2/cole_drogba_laplacian.png'
import grayscaleFft from '../../../assets/cs280a/proj2/grayscale_fft.png'
import stacksApple from '../../../assets/cs280a/proj2/stacks_apple.png'
import stacksOrange from '../../../assets/cs280a/proj2/stacks_orange.png'
// import cameraman from '../../../assets/cs280a/proj2/cameraman.jpg'
// import tajMahal from '../../../assets/cs280a/proj2/taj_mahal.jpg'
// import derek from '../../../assets/cs280a/proj2/derek.jpg'
// import nutmeg from '../../../assets/cs280a/proj2/nutmeg.jpg'
// import apple from '../../../assets/cs280a/proj2/apple.jpg'
// import orange from '../../../assets/cs280a/proj2/orange.jpg'

function Project2() {
  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Project 2: Fun with Filters and Frequencies!
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
          Image Processing with Convolutions and Frequency Domain Analysis
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          CS280A: Intro to Computer Vision and Computational Photography
        </p>
        <div className="prose prose-lg max-w-none">
          <a href="https://cal-cs180.github.io/fa25/hw/proj2/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-lg hover:text-blue-800 underline">
            Official CS280A Project 2 page
          </a>
        </div>
      </div>

      {/* Project Overview */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Project Overview</h2>
        <div className="max-w-6xl mx-auto mb-8">
          <p className="text-lg text-gray-700 text-left">
            The project is divided into two main parts: <strong>Part 1</strong> focuses on spatial domain filtering techniques including 
            convolution implementation, finite difference operators, and derivative of Gaussian filters. <strong>Part 2</strong> explores 
            frequency domain applications including image sharpening, hybrid images, and multi-resolution blending.
          </p>
        </div>
      </div>

      {/* Part 1: Fun with Filters */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Part 1: Fun with Filters</h2>
        
        {/* Part 1.1: Convolutions from Scratch */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Part 1.1: Convolutions from Scratch!</h3>
          <div className="max-w-6xl mx-auto mb-8">
            <p className="text-lg text-left text-gray-700 mb-6">
              The foundation of image filtering lies in the convolution operation. In this section, I implemented convolution 
              from scratch using both four nested for loops and two for loops, with proper zero-padding to handle boundary conditions.
            </p>
            <p className="text-lg text-left text-gray-700 mb-6">
              The convolution operation is defined as:
            </p>
            <div className="my-4">
              <InlineMath math="(f * g)(x,y) = \sum_{i,j} f(i,j) \cdot g(x-i, y-j)" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Boundary Handling Comparison</h4>
            <p className="text-lg text-left text-gray-700 mb-4">
              For our custom convolution functions, <code>naive_convolution</code> and <code>two_loop_convolution</code>, we use <code>np.pad</code> with constant mode & fill value 0 to create a black border around the original image (zero-padding). This ensures that the kernel can be centered on each pixel in the original image without going out of bounds, but as we can see visually, it creates some darker lines towards the borders of the image.
            </p>
            <p className="text-lg text-left text-gray-700 mb-6">
              With <code>scipy.signal.convolve2d</code>, we used symmetric padding, which mirrors the border by reflecting pixel values across the edge of the image, which results in a more natural result with no darker lines towards the borders of the image.
            </p>
            <p className="text-lg text-left text-gray-700 mb-6">
              To demonstrate the convolution operation, I applied a 9×9 box filter and finite difference operators to a self-portrait image:
            </p>            
            <div className="mb-6">
              <h5 className="text-gray-900 text-lg font-semibold mb-3">Implementation Code: Naive Convolution (4 for-loops)</h5>
              <SyntaxHighlighter
                language="python"
                style={vscDarkPlus}
                customStyle={{
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  padding: '1.5rem',
                  margin: 0
                }}
                showLineNumbers={false}
              >
                {`# ––––––––– 4 for-loops version ––––––––––––––
def naive_convolution(image, kernel):
    """
    Perform 2D convolution on a grayscale image using 4 nested loops.
    """
    # Extract dimensions from input, calculate padding
    h_image, w_image = image.shape
    h_kernel, w_kernel = kernel.shape
    h_padding = h_kernel// 2
    w_padding = w_kernel // 2

    # Create a padded image to handle borders
    padded_image = np.pad(image, ((h_padding, h_padding), (w_padding, w_padding)), mode='constant', constant_values=0)
    output = np.zeros_like(image, dtype=float)

    # 2 outer for-loops: iterate over each
    # row (y) and col (x) of the output image
    for x in range(w_image):
        for y in range(h_image):
            pixel_sum = 0.0 # value at output[y, x]

            # 2 inner for-loops: iterate over each
            # row (j) and col (i) of the kernel
            for i in range(w_kernel):
                for j in range(h_kernel):
                    # Multiply image and kernel (convolution) and add up results
                    pixel_sum += padded_image[y + j, x + i] * kernel[j, i]

            output[y, x] = pixel_sum

    return output`}
              </SyntaxHighlighter>
            </div>
            
            <div className="mb-6">
              <h5 className="text-gray-900 text-lg font-semibold mb-3">Implementation Code: Two-Loop Convolution (Vectorized)</h5>
              <SyntaxHighlighter
                language="python"
                style={vscDarkPlus}
                customStyle={{
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  padding: '1.5rem',
                  margin: 0
                }}
                showLineNumbers={false}
              >
                {`# ––––––––– 2 for-loops version ––––––––––––––
def two_loop_convolution(image, kernel):
    """
    Perform 2D convolution on a grayscale image using 2 nested loops and vectorization.
    """
    # Extract dimensions from input, calculate padding
    h_image, w_image = image.shape
    h_kernel, w_kernel = kernel.shape
    h_padding = h_kernel // 2
    w_padding = w_kernel // 2

    # Create a padded image to handle borders
    padded_image = np.pad(image, ((h_padding, h_padding), (w_padding, w_padding)), mode='constant', constant_values=0)
    output = np.zeros_like(image, dtype=float)

    # Flip kernel L-R and U-D to match mathematical definition of convolution
    # (vs cross correlation)
    flipped_kernel = np.flipud(np.fliplr(kernel))

    # 2 outer for-loops: iterate over each
    # row (y) and col (x) of the output image
    for x in range(w_image):
        for y in range(h_image):
            # Extract region of interest from padded image (image patch to apply kernel)
            image_patch = padded_image[y:y + h_kernel, x:x + w_kernel]

            # Perform element-wise multiplication and sum it up
            output[y, x] = np.sum(image_patch * flipped_kernel)

    return output`}
              </SyntaxHighlighter>
            </div>
            
            <div className="mb-6">
              <h5 className="text-gray-900 text-lg font-semibold mb-3">Implementation Code: Finite Difference Operators</h5>
              <SyntaxHighlighter
                language="python"
                style={vscDarkPlus}
                customStyle={{
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  padding: '1.5rem',
                  margin: 0
                }}
                showLineNumbers={false}
              >
                {`# Define the finite difference filters
Dx = np.array([[1, 0, -1]])
Dy = np.array([[1], [0], [-1]])

# Compute the partial derivatives using convolution
partial_x = convolve2d(img_gray, Dx, mode='same', boundary='symm')
partial_y = convolve2d(img_gray, Dy, mode='same', boundary='symm')`}
              </SyntaxHighlighter>
            </div>
          </div>
          
          {/* Convolution results */}
          <div className="mb-8">
            <div className="text-center mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Convolution Implementation Results</h4>
              <img 
                src={convFromScratch} 
                alt="Convolution from Scratch Results" 
                className="w-full object-contain rounded-lg shadow-lg"
              />
            </div>
            
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Original Image with Finite Difference Operators</h4>
              <img 
                src={originalDxDy} 
                alt="Original Image with Dx and Dy Results" 
                className="w-full object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Part 1.2: Finite Difference Operator */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Part 1.2: Finite Difference Operator</h3>
          <div className="max-w-6xl mx-auto mb-8">
            <p className="text-lg text-left text-gray-700 mb-6">
              Using the cameraman image, I computed the partial derivatives in x and y directions using the finite difference operators:
            </p>
            <div className="my-4">
              <InlineMath math="\frac{\partial I}{\partial x} = I * D_x \quad \text{and} \quad \frac{\partial I}{\partial y} = I * D_y" />
            </div>
            <p className="text-lg text-left text-gray-700 mb-4">
              The gradient magnitude represents the strength of the local edge at each point in the image. It's calculated by taking the Euclidean distance of the partial derivatives,
            </p>
            <div className="my-4">
              <InlineMath math="|G| = \sqrt{G_x^2 + G_y^2}" />
            </div>
            <p className="text-lg text-left text-gray-700 mb-6">
              I chose a threshold of 0.32 to create a balance between true edge preservation and noise suppression. 
              This value was qualitatively assessed to be the "best" since it isolates the edges of the main subject, 
              me, and relevant background objects like the nearby tree trunk and canopies, while also removing noisy 
              edges such as faraway trees and rocks. Similarly, with the cameraman image, it allows us to capture the 
              full outline of the cameraman, his equipment and the most significant building in the background. 
              Having a lower threshold would clutter the binarized edge map with unnecessary and noisy edges, and 
              having a higher threshold would erase key edges near the face of the subject.
            </p>
          </div>
          
          <h4 className="text-xl font-semibold text-gray-900 mb-4">Finite Difference Results</h4>
          <div className="mb-8">
            <img 
              src={cameramanEdgeDetection} 
              alt="Cameraman Edge Detection Steps" 
              className="w-full object-contain rounded-lg shadow-lg"
            />
          </div>
          
          <div className="mb-8">
            <img 
              src={yashGradientMagnitude} 
              alt="Yash Gradient Magnitude Results" 
              className="w-full object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Part 1.3: Derivative of Gaussian (DoG) Filter */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Part 1.3: Derivative of Gaussian (DoG) Filter</h3>
          <div className="max-w-6xl mx-auto mb-8">
            <p className="text-lg text-left text-gray-700 mb-6">
              The finite difference approach produces noisy results. To address this, I implemented a two-step process:
            </p>
            <ol className="text-lg text-left text-gray-700 mb-6 list-decimal list-inside space-y-2">
              <li>First, smooth the image with a Gaussian filter: <InlineMath math="I_{blurred} = I * G_\sigma" /></li>
              <li>Then apply finite difference operators to the smoothed image</li>
            </ol>
            <p className="text-lg text-left text-gray-700 mb-6">
              This can be combined into a single convolution using the derivative of Gaussian filters:
            </p>
            <div className="my-4">
              <InlineMath math="DoG_x = G_\sigma * D_x \quad \text{and} \quad DoG_y = G_\sigma * D_y" />
            </div>
            <p className="text-lg text-left text-gray-700 mb-6">
              I created 2D Gaussian filters using <code>cv2.getGaussianKernel()</code> and the outer product method. 
              The DoG filters were visualized as images to show their spatial characteristics.
            </p>
          </div>
          
          {/* DoG results */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
            <div className="text-center">
              <div className="bg-gray-50 p-4 rounded-lg">
                <img 
                  src={blurredEdgeDetectionCameraman} 
                  alt="Blurred Edge Detection - Cameraman" 
                  className="w-full h-80 object-contain rounded-lg shadow-lg mb-2"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mt-2">Cameraman - Blurred Edge Detection</h4>
            </div>
            <div className="text-center">
              <div className="bg-gray-50 p-4 rounded-lg">
                <img 
                  src={blurredEdgeDetectionYash} 
                  alt="Blurred Edge Detection - Yash" 
                  className="w-full h-80 object-contain rounded-lg shadow-lg mb-2"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mt-2">Yash - Blurred Edge Detection</h4>
            </div>
          </div>
          
          {/* Verification results */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <img 
                src={verificationCameraman} 
                alt="Verification - Cameraman" 
                className="w-full object-contain rounded-lg shadow-lg mb-2"
              />
              <h4 className="text-lg font-semibold text-gray-900">Cameraman - Verification</h4>
            </div>
            <div className="text-center">
              <img 
                src={verificationYash} 
                alt="Verification - Yash" 
                className="w-full object-contain rounded-lg shadow-lg mb-2"
              />
              <h4 className="text-lg font-semibold text-gray-900">Yash - Verification</h4>
            </div>
          </div>
        </div>

        {/* Bells & Whistles - Gradient Orientations */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Bells & Whistles: Gradient Orientations</h3>
          <div className="max-w-6xl mx-auto mb-8">
            <p className="text-lg text-left text-gray-700 mb-6">
              I computed the gradient orientations using the arctangent of the ratio of y and x derivatives:
            </p>
            <div className="my-4">
              <InlineMath math="\theta = \arctan\left(\frac{\partial I/\partial y}{\partial I/\partial x}\right)" />
            </div>
            <p className="text-lg text-left text-gray-700 mb-6">
              These orientations were visualized using HSV color space, where hue represents the angle (0-360°), 
              saturation represents the gradient magnitude, and value is kept constant. This creates a useful 
              visualization where different edge orientations appear as different colors.
            </p>
          </div>
          
          {/* Gradient orientation visualization */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-gray-50 p-4 rounded-lg">
                <img 
                  src={cameramanHsv} 
                  alt="Cameraman HSV Gradient Orientations" 
                  className="w-full h-80 object-contain rounded-lg shadow-lg mb-2"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mt-2">Cameraman - HSV Gradient Orientations</h4>
            </div>
            <div className="text-center">
              <div className="bg-gray-50 p-4 rounded-lg">
                <img 
                  src={yashHsv} 
                  alt="Yash HSV Gradient Orientations" 
                  className="w-full h-80 object-contain rounded-lg shadow-lg mb-2"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mt-2">Yash - HSV Gradient Orientations</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Part 2: Fun with Frequencies */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Part 2: Fun with Frequencies!</h2>
        
        {/* Part 2.1: Image Sharpening */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Part 2.1: Image "Sharpening"</h3>
          <div className="max-w-6xl mx-auto mb-8">
            <p className="text-lg text-left text-gray-700 mb-6">
              I implemented the unsharp masking technique to enhance image sharpness. The process involves:
            </p>
            <ol className="text-lg text-left text-gray-700 mb-6 list-decimal list-inside space-y-2">
              <li>Create a blurred version using Gaussian filter: <InlineMath math="I_{blurred} = I * G_\sigma" /></li>
              <li>Extract high frequencies: <InlineMath math="I_{high} = I - I_{blurred}" /></li>
              <li>Add amplified high frequencies: <InlineMath math="I_{sharp} = I + \alpha \cdot I_{high}" /></li>
            </ol>
            <p className="text-lg text-left text-gray-700 mb-6">
              This can be combined into a single convolution operation:
            </p>
            <div className="my-4">
              <InlineMath math="I_{sharp} = I * (1 + \alpha \cdot (\delta - G_\sigma))" />
            </div>
            <p className="text-lg text-left text-gray-700 mb-6">
              I tested this on the provided Taj Mahal image and other images that I've taken during my travels. 
              These include higher resolution images of Mount Fuji in Japan, and a Sphinx statue in the UK.
              For the latter, I first blurred the already sharp image, and then attempted to sharpen again to
              evaluate the effectiveness of the technique. By adjusting Gaussian kernel size and alpha values, 
              I was able to achieve a good balance between preserving the original image and enhancing the details.
            </p>
          </div>
          
          {/* Sharpening results */}
          <div className="max-w-6xl mx-auto mb-8">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900">Taj Mahal - Sharpened</h4>
              <img 
                src={tajSharpened} 
                alt="Taj Mahal Sharpened" 
                className="w-full object-contain rounded-lg shadow-lg mb-2"
              />
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto mb-8">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900">Fuji - Sharpened</h4>
              <img 
                src={fujiSharpened} 
                alt="Fuji Sharpened" 
                className="w-full object-contain rounded-lg shadow-lg mb-2"
              />
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900">Sphinx - Blur Then Sharpen</h4>
              <img 
                src={blurThenSharpenSphinx} 
                alt="Blur Then Sharpen Sphinx" 
                className="w-full object-contain rounded-lg shadow-lg mb-2"
              />
            </div>
          </div>
        </div>

        {/* Part 2.2: Hybrid Images */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Part 2.2: Hybrid Images</h3>
          <div className="max-w-6xl mx-auto mb-8">
            <p className="text-lg text-left text-gray-700 mb-6">
              Hybrid images are static images that change interpretation based on viewing distance. The concept combines:
            </p>
            <ul className="text-lg text-left text-gray-700 mb-6 list-disc list-inside space-y-2">
              <li><strong>Low-frequency component</strong> of one image (visible from far away)</li>
              <li><strong>High-frequency component</strong> of another image (visible from close up)</li>
            </ul>
            <p className="text-lg text-left text-gray-700 mb-6">
              The implementation involves:
            </p>
            <ol className="text-lg text-left text-gray-700 mb-6 list-decimal list-inside space-y-2">
              <li>Low-pass filter one image: <InlineMath math="I_{low} = I_1 * G_\sigma" /></li>
              <li>High-pass filter another image: <InlineMath math="I_{high} = I_2 - I_2 * G_\sigma" /></li>
              <li>Combine them: <InlineMath math="I_{hybrid} = I_{low} + I_{high}" /></li>
            </ol>
            <p className="text-lg text-left text-gray-700 mb-6">
              I created 2-3 hybrid images including Derek + Nutmeg and other creative combinations. 
              For one result, I performed frequency analysis showing the log magnitude of Fourier transforms.
            </p>
          </div>
          
          {/* Hybrid image results */}
          <div className="max-w-6xl mx-auto mb-8">
            <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center">Derek + Nutmeg</h4>
            <div className="text-center mb-8">
              <img 
                src={derekNutmeg2} 
                alt="Derek + Nutmeg Hybrid" 
                className="w-full object-contain rounded-lg shadow-lg mb-2"
              />
              <h5 className="text-lg font-semibold text-gray-900">Hybrid Image</h5>
            </div>
            <div className="text-center mb-8">
              <img 
                src={derekGaussian} 
                alt="Derek Gaussian Stack" 
                className="w-full object-contain rounded-lg shadow-lg mb-2"
              />
              <h5 className="text-lg font-semibold text-gray-900">Gaussian Stack</h5>
            </div>
            <div className="text-center mb-8">
              <img 
                src={derekLaplacian} 
                alt="Derek Laplacian Stack" 
                className="w-full object-contain rounded-lg shadow-lg mb-2"
              />
              <h5 className="text-lg font-semibold text-gray-900">Laplacian Stack</h5>
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center">Cole Palmer + Didier Drogba</h4>
            <div className="text-center mb-8">
              <img 
                src={coleDrogba} 
                alt="Cole Palmer + Didier Drogba Hybrid" 
                className="w-full object-contain rounded-lg shadow-lg mb-2"
              />
              <h5 className="text-lg font-semibold text-gray-900">Hybrid Image</h5>
            </div>
            <div className="text-center mb-8">
              <img 
                src={coleDrogbaGaussian} 
                alt="Cole Drogba Gaussian Stack" 
                className="w-full object-contain rounded-lg shadow-lg mb-2"
              />
              <h5 className="text-lg font-semibold text-gray-900">Gaussian Stack</h5>
            </div>
            <div className="text-center mb-8">
              <img 
                src={coleDrogbaLaplacian} 
                alt="Cole Drogba Laplacian Stack" 
                className="w-full object-contain rounded-lg shadow-lg mb-2"
              />
              <h5 className="text-lg font-semibold text-gray-900">Laplacian Stack</h5>
            </div>
          </div>
          
          {/* Frequency Analysis */}
          <div className="max-w-6xl mx-auto mb-8">
            <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center">Frequency Analysis</h4>
            <div className="text-center mb-6">
              <img 
                src={grayscaleFft} 
                alt="Grayscale FFT Analysis" 
                className="w-full object-contain rounded-lg shadow-lg mb-2"
              />
              <h5 className="text-lg font-semibold text-gray-900">Log Magnitude of Fourier Transform</h5>
            </div>
            <p className="text-lg text-left text-gray-700 mb-4">
              This frequency analysis was generated using the 2D Fourier transform to visualize the frequency content 
              of the hybrid image creation process. The log magnitude of the Fourier transform reveals the spatial 
              frequency distribution in each image.
            </p>
            <p className="text-lg text-left text-gray-700 mb-4">
              The analysis shows how the low-frequency components (center of the FFT) contain the overall structure 
              and smooth variations, while high-frequency components (edges) capture fine details and textures. 
              This visualization helps understand how the hybrid image technique works by combining different 
              frequency bands from the two input images. I used the following code to generate this fourier visualization.
            </p>
            <div className="mb-6">
              <h5 className="text-gray-900 text-lg font-semibold mb-3">Python Code for FFT Visualization</h5>
              <SyntaxHighlighter
                language="python"
                style={vscDarkPlus}
                customStyle={{
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  padding: '1.5rem',
                  margin: 0
                }}
                showLineNumbers={false}
              >
                {`plt.imshow(np.log(np.abs(np.fft.fftshift(np.fft.fft2(gray_image)))))`}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>

        {/* Part 2.3: Gaussian and Laplacian Stacks */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Part 2.3: Gaussian and Laplacian Stacks</h3>
          <div className="max-w-6xl mx-auto mb-8">
            <p className="text-lg text-left text-gray-700 mb-6">
              I implemented Gaussian and Laplacian stacks (not pyramids) where images maintain the same dimensions at each level. 
              The Gaussian stack is created by repeatedly applying Gaussian filters:
            </p>
            <div className="my-4">
              <InlineMath math="G_0 = I, \quad G_i = G_{i-1} * G_\sigma" />
            </div>
            <p className="text-lg text-left text-gray-700 mb-6">
              The Laplacian stack captures the difference between consecutive Gaussian levels:
            </p>
            <div className="my-4">
              <InlineMath math="L_i = G_i - G_{i+1}" />
            </div>
            <p className="text-lg text-left text-gray-700 mb-6">
              I applied these stacks to the Oraple image and recreated the outcomes from Figure 3.42 in Szeliski's textbook.
            </p>
          </div>
          
          {/* Gaussian and Laplacian stacks images */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="text-center">
              <img 
                src={stacksApple} 
                alt="Apple Gaussian and Laplacian Stacks" 
                className="w-full object-contain rounded-lg shadow-lg mb-2"
              />
              <h4 className="text-lg font-semibold text-gray-900">Apple - Gaussian and Laplacian Stacks</h4>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mb-8">
            <div className="text-center">
              <img 
                src={stacksOrange} 
                alt="Orange Gaussian and Laplacian Stacks" 
                className="w-full object-contain rounded-lg shadow-lg mb-2"
              />
              <h4 className="text-lg font-semibold text-gray-900">Orange - Gaussian and Laplacian Stacks</h4>
            </div>
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <h4 className="text-lg font-semibold text-gray-900">Gaussian and Laplacian Stacks - Oraple Deconstructed</h4>
            <img 
              src={orapleDeconstructed} 
              alt="Oraple Deconstructed - Gaussian and Laplacian Stacks" 
              className="w-full object-contain rounded-lg shadow-lg mb-2"
            />
          </div>
        </div>

        {/* Part 2.4: Multiresolution Blending */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Part 2.4: Multiresolution Blending (The Oraple!)</h3>
          <div className="max-w-6xl mx-auto mb-8">
            <p className="text-lg text-left text-gray-700 mb-6">
              Using the Gaussian and Laplacian stacks, I implemented multi-resolution blending to seamlessly combine two images. 
              The algorithm works by:
            </p>
            <ol className="text-lg text-left text-gray-700 mb-6 list-decimal list-inside space-y-2">
              <li>Creating Gaussian stacks for both input images and the mask</li>
              <li>Creating Laplacian stacks for both input images</li>
              <li>Blending at each level: <InlineMath math="L_{blend,i} = G_{mask,i} \cdot L_{A,i} + (1 - G_{mask,i}) \cdot L_{B,i}" /></li>
              <li>Reconstructing the final image by summing the blended Laplacian levels</li>
            </ol>
            <p className="text-lg text-left text-gray-700 mb-6">
              I created multiple blended images including the classic apple + orange = "oraple" with a regular (smoothed) mask 
              and another creative combination of cat + owl = "cowl" with an irregular (smoothed) mask to transplant the owl's 
              eyes onto the cat's face. The smoothing of these masks created a better visual blending effect. 
            </p>
          </div>
          
          {/* Blending results */}
          <div className="max-w-6xl mx-auto mb-8">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900">The Oraple - Blending Process</h4>
              <img 
                src={orapleBlendingProcess} 
                alt="Oraple Blending Process" 
                className="w-full object-contain rounded-lg shadow-lg mb-2"
              />
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900">Cowl - Multiresolution Blending</h4>
              <img 
                src={cowl} 
                alt="Cowl Multiresolution Blending" 
                className="w-full object-contain rounded-lg shadow-lg mb-2"
              />
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

export default Project2
