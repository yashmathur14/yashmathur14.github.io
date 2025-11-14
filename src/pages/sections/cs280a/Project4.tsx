import { Link } from 'react-router-dom'
import 'katex/dist/katex.min.css'
import { InlineMath, BlockMath } from 'react-katex'

// Import project images
import { 
  cameraFrustums1, 
  cameraFrustums2, 
  cameraFrustums3, 
  mlpSimple, 
  foxOutput, 
  foxPSNR, 
  finalResultFox,
  psnrComparisonsFox,
  snowLeopardOutput,
  snowLeopardPSNR,
  snowLeopard2x2,
  snowLeopard2x2PSNR,
  legoImageIters,
  legoImagePSNRGraph,
  legoEvalVideo,
  dataloaderCameraRays,
  dataloaderCameraSamples,
  rayVisualization3D,
  personalDatasetProgressIters,
  personalTrainingLossPSNR,
  personalGTvsRendered,
  personalSceneGif,
  legoDepthMap
} from '../../../assets/cs280a/proj4'

function Project4() {
  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Project 4: Neural Radiance Field!
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
          NeRF: Neural Radiance Fields for View Synthesis
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          CS280A: Intro to Computer Vision and Computational Photography
        </p>
        <div className="prose prose-lg max-w-none">
          <a href="https://cal-cs180.github.io/fa25/hw/proj4/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-lg hover:text-blue-800 underline">
            Official CS280A Project 4 page
          </a>
        </div>
      </div>

      {/* Project Overview */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Project Overview</h2>
        <div className="max-w-6xl mx-auto mb-8">
          <p className="text-lg text-gray-700 text-left mb-4">
            This project explores Neural Radiance Fields (NeRF), a modern technique for novel view synthesis introduced in 
            the <a href="https://arxiv.org/abs/2003.08934" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">original NeRF paper</a> by Mildenhall et al. 
            In essence, NeRF represents 3D scenes as continuous volumetric functions - a neural network that takes 
            a 3D point in space and a viewing direction, then outputs the color and density at that location. What makes this 
            approach powerful is that by training on just a handful of images from different viewpoints, the network learns to 
            implicitly encode the entire 3D scene, allowing us to render photorealistic novel views from any camera angle. 
            The project is divided into three main parts:
          </p>
          <ul className="text-lg text-gray-700 text-left mb-6 list-disc list-inside space-y-2">
            <li><strong>Part 0</strong> focuses on camera calibration and 3D scanning using ArUco tags</li>
            <li><strong>Part 1</strong> implements a neural field to fit a 2D image</li>
            <li><strong>Part 2</strong> implements the full NeRF pipeline for multi-view image synthesis</li>
          </ul>
        </div>
      </div>

      {/* Part 0: Camera Calibration and 3D Scanning */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Part 0: Camera Calibration and 3D Scanning</h2>
        <div className="max-w-6xl mx-auto mb-8">
          <p className="text-lg text-left text-gray-700 mb-6">
            The first step in creating a NeRF is to calibrate the camera and capture a 3D scan of an object. This process 
            involves several key steps:
          </p>
          <ol className="text-lg text-left text-gray-700 mb-6 list-decimal list-outside space-y-4 ml-6">
            <li className="mb-4">
              <strong>Camera Calibration:</strong>
              <p className="ml-0 mt-1">
                Captured 30-50 images of ArUco calibration tags from different angles and distances. Used OpenCV's ArUco detector 
                to extract corner coordinates and computed camera intrinsics (focal length, principal point) and distortion 
                coefficients using <code>cv2.calibrateCamera()</code>.
              </p>
            </li>
            <li className="mb-4">
              <strong>3D Object Scanning:</strong>
              <p className="ml-0 mt-1">
                Placed a single ArUco tag next to the chosen object and captured 30-50 images from varying angles (both 
                horizontally and vertically) at a uniform distance of 10-20cm, ensuring the object fills ~50% of the frame. 
                Maintained consistent camera settings and avoided brightness/exposure changes and motion blur.
              </p>
            </li>
            <li className="mb-4">
              <strong>Camera Pose Estimation:</strong>
              <p className="ml-0 mt-1">
                For each image in the object scan, detected the ArUco tag and used <code>cv2.solvePnP()</code> to solve the 
                Perspective-n-Point (PnP) problem, estimating the camera's extrinsic parameters (rotation and translation). 
                Converted rotation vectors to rotation matrices using <code>cv2.Rodrigues()</code> and inverted the world-to-camera 
                transformation to obtain camera-to-world (c2w) matrices, which are essential for NeRF training.
              </p>
            </li>
            <li className="mb-4">
              <strong>Dataset Creation:</strong>
              <p className="ml-0 mt-1">
                Undistorted all captured images using <code>cv2.undistort()</code> with the computed camera matrix and distortion 
                coefficients to remove lens distortion effects. Organized images, camera intrinsics, and camera-to-world matrices 
                into a structured format, split into training and validation sets, and saved as a dataset file (NPZ format) ready 
                for NeRF training.
              </p>
            </li>
          </ol>
          <p className="text-lg text-left text-gray-700 mb-6">
            The entire pipeline ensures accurate camera parameters and pose estimates, which are crucial for training a NeRF 
            that can synthesize novel views of the captured object.
          </p>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="text-gray-700 text-left">
              <strong>Deliverables:</strong> 2 screenshots of camera frustums visualization in Viser showing the camera poses 
              for the object scan.
            </p>
          </div>

          {/* Camera frustum visualizations */}
          <div className="max-w-6xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <img 
                  src={cameraFrustums1} 
                  alt="Camera Frustums Visualization 1" 
                  className="w-full object-contain rounded-lg shadow-lg mb-2"
                />
                <p className="text-sm text-gray-600">Camera Frustums Visualization 1</p>
              </div>
              <div className="text-center">
                <img 
                  src={cameraFrustums2} 
                  alt="Camera Frustums Visualization 2" 
                  className="w-full object-contain rounded-lg shadow-lg mb-2"
                />
                <p className="text-sm text-gray-600">Camera Frustums Visualization 2</p>
              </div>
            </div>
            <div className="text-center max-w-2xl mx-auto">
              <img 
                src={cameraFrustums3} 
                alt="Camera Frustums Visualization 3" 
                className="w-full object-contain rounded-lg shadow-lg mb-2"
              />
              <p className="text-sm text-gray-600">Camera Frustums Visualization 3</p>
            </div>
          </div>
        </div>
      </div>

      {/* Part 1: Fit a Neural Field to a 2D Image */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Part 1: Fit a Neural Field to a 2D Image</h2>
        <div className="max-w-6xl mx-auto mb-8">
          <p className="text-lg text-left text-gray-700 mb-6">
            Before jumping into 3D space representation with Neural Radiance Fields (NeRF), we first familiarize ourselves 
            with the core concepts using a 2D example. In 2D, there is no concept of radiance, so the Neural Radiance Field 
            simplifies to just a Neural Field, where the function <InlineMath math="f" /> maps 2D pixel coordinates 
            <InlineMath math="(x, y)" /> to RGB color values. This part focuses on creating and optimizing a neural field 
            to represent and fit a 2D image. The neural field takes normalized pixel coordinates as input and outputs the 
            corresponding RGB color at that location. To enable the network to learn high-frequency details, we apply 
            sinusoidal positional encoding to map the input coordinates to a higher-dimensional space before passing them 
            through a Multilayer Perceptron (MLP). This 2D example lets us understand the fundamental building blocks (positional 
            encoding, MLP architecture, and optimization) that will be necessary to extend this for the full 3D NeRF pipeline.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-left">Positional Encoding</h3>
          <p className="text-lg text-left text-gray-700 mb-4">
            Positional encoding transforms input coordinates using sinusoidal functions to help the network learn high-frequency details:
          </p>
          <div className="my-4 bg-gray-100 p-4 rounded-lg">
            <div className="text-gray-700 text-left">
              <InlineMath math="PE(x) = \{x, \sin(2^0\pi x), \cos(2^0\pi x), \sin(2^1\pi x), \cos(2^1\pi x), \ldots, \sin(2^{L-1}\pi x), \cos(2^{L-1}\pi x)\}" />
            </div>
            <p className="text-gray-600 text-sm mt-3">
              where <InlineMath math="L" /> is the maximum frequency level
            </p>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-left">Model Architecture</h3>
          <p className="text-lg text-left text-gray-700 mb-4">
            The model consists of a multi-layer perceptron (MLP) that takes encoded coordinates and outputs RGB values. 
            The architecture is illustrated below:
          </p>
          
          {/* MLP Architecture Diagram */}
          <div className="mb-6">
            <img 
              src={mlpSimple} 
              alt="MLP Architecture for Neural Field" 
              className="w-full max-w-4xl mx-auto object-contain rounded-lg shadow-lg mb-2"
            />
            <p className="text-sm text-gray-600 text-center">
              MLP Architecture: 2D coordinates → Positional Encoding → 4 Linear layers (256 neurons) → ReLU → Sigmoid → RGB output
            </p>
          </div>

          {/* Model Architecture Report */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6 rounded-r-lg">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 text-left">Model Architecture Report</h4>
            <div className="text-gray-700 text-left space-y-4">
              <div>
                <strong className="text-gray-900">Network Architecture:</strong>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1.5">
                  <li><strong>Type:</strong> Multilayer Perceptron (MLP) with Sinusoidal Positional Encoding</li>
                  <li><strong>Number of Layers:</strong> 4 fully connected layers (excluding positional encoding and output activation)</li>
                  <li><strong>Hidden Width:</strong> 256 neurons per hidden layer</li>
                  <li><strong>Input Dimension:</strong> 2D normalized pixel coordinates (u, v) in [0, 1]</li>
                  <li><strong>Positional Encoding:</strong>
                    <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                      <li>Max frequency level (L): 10</li>
                      <li>Output dimension: 42 (2 + 4×10)</li>
                    </ul>
                  </li>
                  <li><strong>Output Dimension:</strong> 3 (RGB values in [0, 1])</li>
                  <li><strong>Activation Functions:</strong>
                    <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                      <li>Hidden layers: ReLU</li>
                      <li>Output layer: Sigmoid (to constrain RGB to [0, 1])</li>
                    </ul>
                  </li>
                  <li><strong>Total Parameters:</strong> 143,363</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-900">Training Configuration:</strong>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1.5">
                  <li><strong>Optimizer:</strong> Adam</li>
                  <li><strong>Learning Rate:</strong> 1e-2 (0.01)</li>
                  <li><strong>Loss Function:</strong> Mean Squared Error (MSE)</li>
                  <li><strong>Batch Size:</strong> 10,000 pixels per iteration</li>
                  <li><strong>Number of Iterations:</strong> 2,000</li>
                  <li><strong>Metric:</strong> PSNR = 10 × log₁₀(1 / MSE)</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-900">Hyperparameters Tested:</strong>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1.5">
                  <li>Positional encoding frequencies (L): 4, 10</li>
                  <li>Hidden widths: 64, 256</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="text-gray-700 text-left">
              <strong>Deliverables:</strong> 
            </p>
            <ul className="text-gray-700 text-left mt-2 list-disc list-inside space-y-1">
              <li>Model architecture report (number of layers, width, learning rate, and other important details)</li>
              <li>Training progression visualization on both the provided test image and one of your own images</li>
              <li>Final results for 2 choices of max positional encoding frequency and 2 choices of width (2x2 grid)</li>
              <li>PSNR curve for training on one image of your choice</li>
            </ul>
          </div>

          {/* Training Progression - Fox (Test Image) */}
          <div className="mb-10">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 text-left">Training Progression: Fox (Test Image)</h4>
            <div className="text-center">
              <img 
                src={foxOutput} 
                alt="Fox Image Training Progression" 
                className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
              />
              <p className="text-sm text-gray-600">Training progression showing output at different iterations</p>
            </div>
          </div>

          {/* Training Progression - Snow Leopard (Custom Image) */}
          <div className="mb-10">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 text-left">Training Progression: Snow Leopard (Custom Image)</h4>
            <div className="text-center">
              <img 
                src={snowLeopardOutput} 
                alt="Snow Leopard Image Training Progression" 
                className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
              />
              <p className="text-sm text-gray-600">Training progression showing output at different iterations</p>
            </div>
          </div>

          {/* PSNR Curves */}
          <div className="mb-10">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 text-left">Plots: Training Loss and PSNR Curves</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <img 
                  src={foxPSNR} 
                  alt="Fox Image PSNR Curve" 
                  className="w-full object-contain rounded-lg shadow-lg mb-2"
                />
                <p className="text-sm text-gray-600">Fox: PSNR progression and training loss over training iterations</p>
              </div>
              <div className="text-center">
                <img 
                  src={snowLeopardPSNR} 
                  alt="Snow Leopard Image PSNR Curve" 
                  className="w-full object-contain rounded-lg shadow-lg mb-2"
                />
                <p className="text-sm text-gray-600">Snow Leopard: PSNR progression and training loss over training iterations</p>
              </div>
            </div>
          </div>

          {/* Results Grid - Fox Image */}
          <div className="mb-10">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 text-left">Results: Different Hyperparameters (Fox Image)</h4>
            <div className="text-center mb-6">
              <img 
                src={finalResultFox} 
                alt="Fox Image Results Grid" 
                className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
              />
              <p className="text-sm text-gray-600 mb-4">
                2×2 grid showing results for different positional encoding frequencies (L=4, 10) and hidden widths (64, 256)
              </p>
            </div>
            <div className="text-center">
              <img 
                src={psnrComparisonsFox} 
                alt="Fox Image PSNR Comparisons" 
                className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
              />
              <p className="text-sm text-gray-600">
                PSNR comparisons for different hyperparameter configurations
              </p>
            </div>
          </div>

          {/* Results Grid - Custom Image */}
          <div className="mb-10">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 text-left">Results: Different Hyperparameters (Snow Leopard Image)</h4>
            <div className="text-center mb-6">
              <img 
                src={snowLeopard2x2} 
                alt="Snow Leopard Image Results Grid" 
                className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
              />
              <p className="text-sm text-gray-600 mb-4">
                2×2 grid showing results for different positional encoding frequencies (L=4, 10) and hidden widths (64, 256)
              </p>
            </div>
            <div className="text-center">
              <img 
                src={snowLeopard2x2PSNR} 
                alt="Snow Leopard Image PSNR Comparisons" 
                className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
              />
              <p className="text-sm text-gray-600">
                PSNR comparisons for different hyperparameter configurations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Part 2: Fit a Neural Radiance Field from Multi-view Images */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Part 2: Fit a Neural Radiance Field from Multi-view Images</h2>
        <div className="max-w-6xl mx-auto mb-8">
          <p className="text-lg text-left text-gray-700 mb-6">
            Now we implement the full NeRF pipeline for novel view synthesis from multiple input images. The NeRF 
            represents a scene as a continuous 5D function that outputs volume density and RGB color for any 3D point 
            and viewing direction.
          </p>
        </div>

        {/* Part 2.1: Ray Generation */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Part 2.1: Create Rays from Cameras</h3>
          <div className="max-w-6xl mx-auto mb-8">
            <p className="text-lg text-left text-gray-700 mb-6">
              For each pixel in an image, we generate a ray from the camera center through that pixel. This process involves 
              three main steps: transforming points from camera to world space, converting pixel coordinates to camera coordinates, 
              and finally constructing rays with origin and direction vectors.
            </p>

            {/* Camera to World Coordinate Conversion */}
            <h4 className="text-xl font-semibold text-gray-900 mb-4 text-left mt-8">Camera to World Coordinate Conversion</h4>
            <p className="text-lg text-left text-gray-700 mb-4">
              The transformation between the world space <InlineMath math="\mathbf{X_w} = (x_w, y_w, z_w)" /> and the camera space 
              <InlineMath math="\mathbf{X_c} = (x_c, y_c, z_c)" /> can be defined as a rotation matrix <InlineMath math="\mathbf{R}_{3\times3}" /> 
              and a translation vector <InlineMath math="\mathbf{t}" />:
            </p>
            <div className="my-4 bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <BlockMath math="\begin{bmatrix} x_c \\ y_c \\ z_c \\ 1 \end{bmatrix} = \begin{bmatrix} \mathbf{R}_{3\times3} & \mathbf{t} \\ \mathbf{0}_{1\times3} & 1 \end{bmatrix} \begin{bmatrix} x_w \\ y_w \\ z_w \\ 1 \end{bmatrix}" />
            </div>
            <p className="text-lg text-left text-gray-700 mb-4">
              in which <InlineMath math="\begin{bmatrix} \mathbf{R}_{3\times3} & \mathbf{t} \\ \mathbf{0}_{1\times3} & 1 \end{bmatrix}" /> 
              is called world-to-camera (w2c) transformation matrix, or extrinsic matrix. The inverse of it is called 
              camera-to-world (c2w) transformation matrix.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="text-gray-700 text-left">
                <strong>[Impl]</strong> I implemented <InlineMath math="x_w = \text{transform}(c2w, x_c)" /> to transform points 
                from camera to world space, verified by checking that <InlineMath math="x == \text{transform}(c2w^{-1}, \text{transform}(c2w, x))" /> holds.
              </p>
            </div>

            {/* Pixel to Camera Coordinate Conversion */}
            <h4 className="text-xl font-semibold text-gray-900 mb-4 text-left mt-8">Pixel to Camera Coordinate Conversion</h4>
            <p className="text-lg text-left text-gray-700 mb-4">
              Consider a pinhole camera with focal length <InlineMath math="(f_x, f_y)" /> and principal point 
              <InlineMath math="(o_x = \text{image\_width} / 2, o_y = \text{image\_height} / 2)" />. The intrinsic matrix 
              <InlineMath math="\mathbf{K}" /> and projection equation are:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div>
                <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                  <BlockMath math="\mathbf{K} = \begin{bmatrix} f_x & 0 & o_x \\ 0 & f_y & o_y \\ 0 & 0 & 1 \end{bmatrix}" />
                </div>
                <p className="text-sm text-left text-gray-600 mt-2">
                  Intrinsic matrix definition
                </p>
              </div>
              <div>
                <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                  <BlockMath math="s \begin{bmatrix} u \\ v \\ 1 \end{bmatrix} = \mathbf{K} \begin{bmatrix} x_c \\ y_c \\ z_c \end{bmatrix}" />
                </div>
                <p className="text-sm text-left text-gray-600 mt-2">
                  Projection of 3D point <InlineMath math="(x_c, y_c, z_c)" /> to 2D pixel <InlineMath math="(u, v)" />, where <InlineMath math="s=z_c" /> is the depth
                </p>
              </div>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="text-gray-700 text-left">
                <strong>[Impl]</strong> I implemented <InlineMath math="x_c = \text{pixel\_to\_camera}(K, uv, s)" /> to invert 
                the projection, transforming pixel coordinates back to camera space. Supports batched processing.
              </p>
            </div>

            {/* Pixel to Ray */}
            <h4 className="text-xl font-semibold text-gray-900 mb-4 text-left mt-8">Pixel to Ray</h4>
            <p className="text-lg text-left text-gray-700 mb-4">
              A ray can be defined by an origin vector <InlineMath math="\mathbf{r}_o \in \mathbb{R}^3" /> and a direction vector <InlineMath math="\mathbf{r}_d \in \mathbb{R}^3" />.
              For a camera-to-world (c2w) transformation matrix 
              <InlineMath math="\begin{bmatrix} \mathbf{R}_{3\times3} & \mathbf{t} \\ \mathbf{0}_{1\times3} & 1 \end{bmatrix}" />, 
              the ray origin and direction are computed as:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div>
                <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                  <BlockMath math="\mathbf{r}_o = \mathbf{t}" />
                </div>
                <p className="text-sm text-left text-gray-600 mt-2">
                  Ray origin is the camera location in world coordinates (translation component of c2w matrix)
                </p>
              </div>
              <div>
                <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                  <BlockMath math="\mathbf{r}_d = \frac{\mathbf{X_w} - \mathbf{r}_o}{||\mathbf{X_w} - \mathbf{r}_o||_2}" />
                </div>
                <p className="text-sm text-left text-gray-600 mt-2">
                  Normalized ray direction for pixel <InlineMath math="(u, v)" />, where <InlineMath math="\mathbf{X_w}" /> is found by 
                  choosing a point at depth <InlineMath math="s=1" /> and transforming to world space
                </p>
              </div>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="text-gray-700 text-left">
                <strong>[Impl]</strong> I implemented <InlineMath math="ray_o, ray_d = \text{pixel\_to\_ray}(K, c2w, uv)" /> 
                that combines the previous functions to convert pixel coordinates to rays with origin and normalized direction. 
                Supports batched processing.
              </p>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-gray-700 text-left">
                <strong>Deliverables:</strong> Implementation of ray generation function that creates rays for all pixels 
                in an image given the camera intrinsics and extrinsics.
              </p>
            </div>
          </div>
        </div>

        {/* Part 2.2: Sampling */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Part 2.2: Sampling</h3>
          <div className="max-w-6xl mx-auto mb-8">
            <p className="text-lg text-left text-gray-700 mb-6">
              After generating rays from camera parameters, we need to sample rays from multiple training images and 
              discretize each ray into 3D points for querying the neural network. This section covers two key sampling 
              operations: sampling rays from images and sampling points along rays.
            </p>

            {/* Sampling Rays from Images */}
            <h4 className="text-xl font-semibold text-gray-900 mb-4 text-left mt-8">Sampling Rays from Images</h4>
            <p className="text-lg text-left text-gray-700 mb-4">
              Extending Part 1's random pixel sampling to multiple images, we now convert pixel coordinates to rays using 
              the functions from Part 2.1. An important detail is accounting for pixel center offset by adding 0.5 to UV 
              coordinates (e.g., <InlineMath math="u = [0.5, 1.5, 2.5, \ldots, W-0.5]" />).
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="text-gray-700 text-left mb-3">
                <strong>[Impl]</strong> I implemented a <code className="bg-gray-200 px-2 py-1 rounded">RaysFromImagesSampler</code> class 
                that precomputes all rays for efficiency:
              </p>
              <ul className="text-gray-700 text-left list-disc list-inside ml-4 space-y-1.5">
                <li>For each image, converts all pixel coordinates to rays using <code className="bg-gray-200 px-1 py-0.5 rounded">pixel_to_ray</code> 
                from Part 2.1</li>
                <li>Flattens and concatenates all rays and RGB values into single arrays</li>
                <li>Sampling reduces to randomly selecting indices from precomputed arrays</li>
              </ul>
              <p className="text-gray-700 text-left mt-3">
                This precomputation approach is efficient since ray generation happens once during initialization, and training 
                iterations only require array indexing.
              </p>
            </div>

            {/* Sampling Points along Rays */}
            <h4 className="text-xl font-semibold text-gray-900 mb-4 text-left mt-8">Sampling Points along Rays</h4>
            <p className="text-lg text-left text-gray-700 mb-4">
              After obtaining rays, we need to discretize each ray into 3D points that will be queried by the neural network. 
              The simplest approach is to uniformly sample points along each ray between near and far bounds.
            </p>
            <p className="text-lg text-left text-gray-700 mb-4">
              For a ray with origin <InlineMath math="\mathbf{r}_o" /> and direction <InlineMath math="\mathbf{r}_d" />, 
              we sample distances <InlineMath math="t \in [t_{near}, t_{far}]" /> and compute 3D points as:
            </p>
            <div className="my-4 bg-gray-100 p-4 rounded-lg">
              <BlockMath math="\mathbf{x} = \mathbf{r}_o + t \cdot \mathbf{r}_d" />
            </div>
            <p className="text-lg text-left text-gray-700 mb-4">
              For the Lego scene, we set <InlineMath math="t_{near} = 2.0" /> and <InlineMath math="t_{far} = 6.0" />. 
              However, using fixed sample positions (e.g., <InlineMath math="t = \text{linspace}(t_{near}, t_{far}, n_{samples})" />) 
              can lead to overfitting during training.
            </p>
            <p className="text-lg text-left text-gray-700 mb-4">
              To address this, we introduce stratified jittering during training: instead of sampling at fixed positions, 
              we randomly perturb each sample within its interval. This ensures that every location along the ray is explored 
              during training, improving generalization.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="text-gray-700 text-left mb-3">
                <strong>[Impl]</strong> I implemented a <code className="bg-gray-200 px-2 py-1 rounded">sample_points_along_rays</code> function 
                with the following key features:
              </p>
              <ul className="text-gray-700 text-left list-disc list-inside ml-4 space-y-1.5">
                <li>Creates evenly spaced bin edges between near and far bounds: 
                <InlineMath math="bins = [t_{near}, t_1, t_2, \ldots, t_{far}]" /> with <InlineMath math="n_{samples} + 1" /> edges</li>
                <li>When <code className="bg-gray-200 px-1 py-0.5 rounded">perturb=False</code> (inference): uses interval midpoints for deterministic sampling</li>
                <li>When <code className="bg-gray-200 px-1 py-0.5 rounded">perturb=True</code> (training): applies stratified jitter within each interval:
                <InlineMath math="t = t_{start} + \text{random}(0, 1) \cdot \text{width}" /></li>
                <li>Computes 3D points using the ray equation: <InlineMath math="\mathbf{x} = \mathbf{r}_o + t \cdot \mathbf{r}_d" /></li>
                <li>Returns both the 3D points <InlineMath math="[N, n_{samples}, 3]" /> and the t values <InlineMath math="[N, n_{samples}]" /></li>
              </ul>
              <p className="text-gray-700 text-left mt-3">
                I typically use <InlineMath math="n_{samples} = 32" /> or <InlineMath math="64" /> samples per ray, which provides 
                a good balance between quality and computational efficiency.
              </p>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-gray-700 text-left">
                <strong>Deliverables:</strong> Implementation of ray sampling from multiple images and point sampling along rays 
                with optional perturbation for training.
              </p>
            </div>
          </div>
        </div>

        {/* Part 2.3: Putting the Dataloading All Together */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Part 2.3: Putting the Dataloading All Together</h3>
          <div className="max-w-6xl mx-auto mb-8">
            <p className="text-lg text-left text-gray-700 mb-6">
              The <code className="bg-gray-200 px-2 py-1 rounded">RaysFromImagesSampler</code> from Part 2.2 serves as our dataloader, 
              combining ray generation (Part 2.1) and sampling (Part 2.2). It provides a <code className="bg-gray-200 px-1 py-0.5 rounded">sample_rays</code> 
              method that randomly samples batches of rays, which are then passed to <code className="bg-gray-200 px-1 py-0.5 rounded">sample_along_rays</code> 
              to generate 3D sample points for training.
            </p>
            <p className="text-lg text-left text-gray-700 mb-4">
              To verify the implementation, I used Viser to visualize cameras, rays, and sample points in 3D. This helps 
              ensure that rays stay within camera frustums and that the sampling process works correctly.
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-gray-700 text-left">
                <strong>Deliverables:</strong> Dataloader implementation that samples rays from multi-view images and 
                visualization of cameras, rays, and samples in 3D.
              </p>
            </div>

            {/* Visualization images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <img 
                  src={dataloaderCameraRays} 
                  alt="Camera Frustums and Rays Visualization" 
                  className="w-full object-contain rounded-lg shadow-lg mb-2"
                />
                <p className="text-sm text-gray-600">Camera frustums and sampled rays visualized in 3D</p>
              </div>
              <div className="text-center">
                <img 
                  src={dataloaderCameraSamples} 
                  alt="Camera Frustums and Sample Points Visualization" 
                  className="w-full object-contain rounded-lg shadow-lg mb-2"
                />
                <p className="text-sm text-gray-600">Camera frustums, rays, and 3D sample points along rays</p>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2.4: Neural Radiance Field */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Part 2.4: Neural Radiance Field</h3>
          <div className="max-w-6xl mx-auto mb-8">
            <p className="text-lg text-left text-gray-700 mb-6">
              After sampling 3D points along rays, we use a neural network to predict density and view-dependent color 
              for each point. The NeRF network extends the 2D neural field from Part 1 to 3D space, with three key 
              modifications: 3D coordinates and view direction as input, density and color as output, and a deeper 
              architecture with skip connections.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 mb-4 text-left mt-8">Positional Encoding</h4>
            <p className="text-lg text-left text-gray-700 mb-4">
              I implemented a generalized <code className="bg-gray-200 px-2 py-1 rounded">PositionalEncodingND</code> class 
              that extends the 2D positional encoding from Part 1 to N dimensions. The network uses different frequency levels:
            </p>
            <ul className="text-lg text-left text-gray-700 mb-6 list-disc list-inside space-y-2">
              <li><strong>Position encoding:</strong> <InlineMath math="L=10" /> frequency bands (63 dimensions: 3 + 3×2×10)</li>
              <li><strong>Direction encoding:</strong> <InlineMath math="L=4" /> frequency bands (27 dimensions: 3 + 3×2×4)</li>
            </ul>
            <p className="text-lg text-left text-gray-700 mb-4">
              Fewer frequencies for directions are sufficient since view-dependent effects are typically lower frequency than 
              spatial details.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 mb-4 text-left mt-8">Network Architecture</h4>
            <p className="text-lg text-left text-gray-700 mb-4">
              The <code className="bg-gray-200 px-2 py-1 rounded">NeRFNetwork</code> implements an 8-layer MLP with 
              <InlineMath math="256" /> hidden units per layer, structured as follows:
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="text-gray-700 text-left mb-3">
                <strong>[Impl]</strong> Key implementation details:
              </p>
              <ul className="text-gray-700 text-left list-disc list-inside ml-4 space-y-2">
                <li><strong>Position MLP (first 4 layers):</strong> Processes encoded 3D positions through 4 linear layers 
                with ReLU activations, transforming from 63D (encoded position) to 256D hidden representations</li>
                <li><strong>Skip connection:</strong> After layer 4, the original encoded position is concatenated with the 
                hidden representation (256D + 63D = 319D), then passed through 4 more layers. This skip connection helps 
                the network preserve high-frequency spatial details and improves gradient flow in deep networks</li>
                <li><strong>Density head:</strong> A single linear layer maps the 256D hidden state to a scalar density 
                <InlineMath math="\sigma" />, with ReLU activation to ensure non-negative values</li>
                <li><strong>Feature extraction:</strong> A linear layer extracts a 256D feature vector from the hidden state</li>
                <li><strong>Color head:</strong> The feature vector is concatenated with the encoded direction (256D + 27D = 283D), 
                passed through a 128D hidden layer with ReLU, then through a final linear layer to produce RGB values. 
                Sigmoid activation constrains colors to [0, 1]</li>
              </ul>
            </div>
            <p className="text-lg text-left text-gray-700 mb-4">
              The skip connection (injecting the input after positional encoding into the middle of the MLP) is a crucial 
              design choice that prevents the network from forgetting high-frequency spatial details as information flows 
              through the deep layers. This is especially important for NeRF, which needs to represent fine geometric and 
              textural details.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 mb-4 text-left mt-8">Volume Rendering</h4>
            <p className="text-lg text-left text-gray-700 mb-4">
              Volume rendering composites the density and color values along each ray to produce the final pixel color. 
              The core idea is that at every small step along the ray, we accumulate the contribution of that interval to 
              the final color. The continuous volume rendering equation is:
            </p>
            <div className="my-4 bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <BlockMath math="C(\mathbf{r}) = \int_{t_n}^{t_f} T(t) \sigma(\mathbf{r}(t)) \mathbf{c}(\mathbf{r}(t), \mathbf{d}) dt" />
              <p className="text-gray-600 text-sm mt-2 text-left">
                where <InlineMath math="T(t) = \exp\left(-\int_{t_n}^t \sigma(\mathbf{r}(s)) ds\right)" /> is the transmittance 
                (probability the ray travels from <InlineMath math="t_n" /> to <InlineMath math="t" /> without being absorbed)
              </p>
            </div>
            <p className="text-lg text-left text-gray-700 mb-4">
              Since we can't compute an infinite integral, we discretize the ray into <InlineMath math="N" /> sample points 
              and approximate the integral with a sum. The discrete approximation is:
            </p>
            <div className="my-4 bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <BlockMath math="\hat{C}(\mathbf{r}) = \sum_{i=1}^N T_i (1 - \exp(-\sigma_i \delta_i)) \mathbf{c}_i" />
              <p className="text-gray-600 text-sm mt-2 text-left">
                where <InlineMath math="T_i = \exp\left(-\sum_{j=1}^{i-1} \sigma_j \delta_j\right)" /> is the probability the ray 
                reaches sample <InlineMath math="i" />, and <InlineMath math="1 - \exp(-\sigma_i \delta_i)" /> is the probability 
                the ray terminates at sample <InlineMath math="i" />
              </p>
            </div>
            <p className="text-lg text-left text-gray-700 mb-4">
              Intuitively, this means we weight each sample's color by: (1) how likely the ray is to reach that point 
              <InlineMath math="(T_i)" />, and (2) how likely it is to stop there <InlineMath math="(1 - e^{-\sigma_i \delta_i})" />. 
              Samples with higher density contribute more to the final color, but only if the ray actually reaches them.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="text-gray-700 text-left mb-3">
                <strong>[Impl]</strong> I implemented <code className="bg-gray-200 px-2 py-1 rounded">volume_render_radiance_field</code> 
                in PyTorch (to enable backpropagation) with the following steps:
              </p>
              <ol className="text-gray-700 text-left list-decimal list-outside space-y-2 ml-4">
                <li><strong>Compute interval widths:</strong> <InlineMath math="\delta_i = t_{i+1} - t_i" />, scaled by ray direction 
                magnitude to account for non-unit directions</li>
                <li><strong>Calculate alpha (opacity):</strong> <InlineMath math="\alpha_i = 1 - \exp(-\sigma_i \delta_i)" /> for each sample</li>
                <li><strong>Compute transmittance:</strong> <InlineMath math="T_i = \prod_{j=0}^{i-1} (1 - \alpha_j)" /> using 
                <code className="bg-gray-200 px-1 py-0.5 rounded">torch.cumprod</code> for efficient computation</li>
                <li><strong>Compute weights:</strong> <InlineMath math="w_i = \alpha_i T_i" /> (contribution of each sample)</li>
                <li><strong>Render final color:</strong> <InlineMath math="C = \sum_i w_i \mathbf{c}_i" /> (weighted sum)</li>
              </ol>
              <p className="text-gray-700 text-left mt-3">
                The function returns both the rendered RGB color and the weights (useful for depth maps). I used 
                <code className="bg-gray-200 px-1 py-0.5 rounded">torch.cumprod</code> and <code className="bg-gray-200 px-1 py-0.5 rounded">torch.cumsum</code> 
                for efficient batched computation and added a small epsilon (<InlineMath math="1 \times 10^{-10}" />) for numerical stability.
              </p>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-gray-700 text-left">
                <strong>Deliverables:</strong> Implementation of NeRF network architecture with positional encoding, skip 
                connections, and volume rendering equation that composites colors and densities along rays to produce final 
                pixel colors.
              </p>
            </div>
          </div>
        </div>

        {/* Part 2.5: Training */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Part 2.5: Training</h3>
          <div className="max-w-6xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div>
                <p className="text-lg text-left text-gray-700 mb-4">
                  Training combines all previous components:
                </p>
                <ol className="text-lg text-left text-gray-700 list-decimal list-inside space-y-2">
                  <li>Sample rays from training images (Part 2.2)</li>
                  <li>Generate 3D points along rays (Part 2.2)</li>
                  <li>Query the network for density and color (Part 2.4)</li>
                  <li>Volume render to get predicted colors (Part 2.4)</li>
                  <li>Compute MSE loss and backpropagate</li>
                </ol>
              </div>
              <div>
                <p className="text-lg text-left text-gray-700 mb-4">
                  Key hyperparameters:
                </p>
                <ul className="text-lg text-left text-gray-700 list-disc list-inside space-y-2">
                  <li>Learning rate: 5e-4 (Adam optimizer)</li>
                  <li>Batch size: 1024 rays per iteration</li>
                  <li>Samples per ray: 32</li>
                  <li>Near/far bounds: 2.0 / 6.0 (for Lego scene)</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-gray-700 text-left">
                <strong>Deliverables:</strong> 
              </p>
              <ul className="text-gray-700 text-left mt-2 list-disc list-inside space-y-1">
                <li>Brief description of how you implemented each part</li>
                <li>Visualization of rays and samples you draw at a single training step (along with the cameras), similar to the plot shown above. Plot up to 100 rays to make it less crowded.</li>
                <li>Training progression visualization with predicted images across iterations</li>
                <li>PSNR curve on the validation set (6 images)</li>
                <li>Spherical rendering video of the Lego using provided test cameras</li>
              </ul>
            </div>

            {/* Ray and Sample Visualization */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 text-left">Ray and Sample Visualization</h4>
              <div className="text-center">
                <img 
                  src={rayVisualization3D} 
                  alt="Ray and Sample Visualization with Cameras" 
                  className="w-full max-w-xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                />
                <p className="text-sm text-gray-600">Visualization of cameras, rays, and sample points at a single training step</p>
              </div>
            </div>

            {/* Training progression */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 text-left">Training Progression</h4>
              <div className="text-center">
                <img 
                  src={legoImageIters} 
                  alt="Lego Training Progression" 
                  className="w-full max-w-6xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                />
                <p className="text-sm text-gray-600">Training progression showing predicted images at different iterations</p>
              </div>
            </div>

            {/* PSNR curve and Spherical rendering video side by side */}
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 text-left">PSNR Curve on Validation Set</h4>
                  <img 
                    src={legoImagePSNRGraph} 
                    alt="Lego Validation PSNR Curve" 
                    className="w-full object-contain rounded-lg shadow-lg mb-2"
                  />
                  <p className="text-sm text-gray-600">Validation PSNR progression over training iterations</p>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 text-left">Spherical Rendering Video</h4>
                  <img 
                    src={legoEvalVideo} 
                    alt="Lego Spherical Rendering Video" 
                    className="w-full object-contain rounded-lg shadow-lg mb-2"
                  />
                  <p className="text-sm text-gray-600">Spherical rendering video of the Lego scene using provided test cameras</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2.6: Training with Your Own Data */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Part 2.6: Training with Your Own Data</h3>
          <div className="max-w-6xl mx-auto mb-8">
            <p className="text-lg text-left text-gray-700 mb-6">
              Finally, we train a NeRF on the dataset created in Part 0 using your own captured object. This requires 
              adjusting hyperparameters such as near/far bounds and number of samples per ray to match your specific 
              scene characteristics.
            </p>
            <p className="text-lg text-left text-gray-700 mb-6">
              Important considerations:
            </p>
            <ul className="text-lg text-left text-gray-700 mb-6 list-disc list-inside space-y-2">
              <li>Adjust near and far parameters based on your scene scale (e.g., near=0.02, far=0.5 for small objects)</li>
              <li>You may need to increase the number of samples per ray for better quality (e.g., 64 samples)</li>
              <li>If training is slow, consider resizing images (and adjusting intrinsics accordingly)</li>
              <li>Generate novel views by creating camera paths that circle around the object</li>
            </ul>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-gray-700 text-left">
                <strong>Deliverables:</strong> 
              </p>
              <ul className="text-gray-700 text-left mt-2 list-disc list-inside space-y-1">
                <li>GIF of camera circling your object showing novel views</li>
                <li>Discussion of code or hyperparameter changes you made</li>
                <li>Plot of training loss over iterations</li>
                <li>Intermediate renders of the scene during training</li>
              </ul>
            </div>

            {/* Novel View Rendering */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 text-left">Novel View Rendering</h4>
              <div className="text-center">
                <img 
                  src={personalSceneGif} 
                  alt="Novel View Rendering - Camera Circling Object" 
                  className="w-full max-w-xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                />
                <p className="text-sm text-gray-600">GIF showing novel views as the camera circles around the captured object</p>
              </div>
            </div>

            {/* Training Loss and PSNR */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 text-left">Training Loss and PSNR</h4>
              <div className="text-center">
                <img 
                  src={personalTrainingLossPSNR} 
                  alt="Training Loss and PSNR Curves" 
                  className="w-full max-w-4xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                />
                <p className="text-sm text-gray-600">Training loss and PSNR progression over iterations</p>
              </div>
            </div>

            {/* Intermediate Renders During Training */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 text-left">Intermediate Renders During Training</h4>
              <div className="text-center">
                <img 
                  src={personalDatasetProgressIters} 
                  alt="Intermediate Renders During Training" 
                  className="w-full max-w-6xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                />
                <p className="text-sm text-gray-600">Training progression showing predicted images at different iterations</p>
              </div>
            </div>

            {/* Ground Truth vs Rendered Comparison */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 text-left">Ground Truth vs Rendered NeRF</h4>
              <div className="text-center">
                <img 
                  src={personalGTvsRendered} 
                  alt="Ground Truth vs Rendered NeRF Comparison" 
                  className="w-full max-w-6xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                />
                <p className="text-sm text-gray-600">Comparison between ground truth images and NeRF-rendered images</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bells & Whistles */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Bells & Whistles (Required for CS 280A)</h2>
        <div className="max-w-6xl mx-auto mb-8">
          <p className="text-lg text-gray-700 text-left mb-4">
            <strong>Render the depth map video for the Lego scene.</strong> Instead of compositing per-point colors 
            to the pixel color in the volume rendering, we can also composite per-point depths to the pixel depth.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <p className="text-gray-700 text-left mb-3">
              <strong>[Impl]</strong> To support depth map rendering, I modified the <code className="bg-gray-200 px-2 py-1 rounded">volume_render_radiance_field</code> 
              function from Part 2.4 to also return a depth map. The key change is computing depth by finding the sample 
              location with maximum weight along each ray:
            </p>
            <ul className="text-gray-700 text-left list-disc list-inside ml-4 space-y-1.5 mb-3">
              <li>Find the index of maximum weight: <code className="bg-gray-200 px-1 py-0.5 rounded">max_weight_indices = torch.argmax(weights, dim=-1)</code></li>
              <li>Extract the corresponding t value: <code className="bg-gray-200 px-1 py-0.5 rounded">depth_map = t_vals.gather(1, max_weight_indices.unsqueeze(-1)).squeeze(-1)</code></li>
            </ul>
            <p className="text-gray-700 text-left">
              I also implemented <code className="bg-gray-200 px-2 py-1 rounded">render_camera_depth</code>, similar to 
              <code className="bg-gray-200 px-1 py-0.5 rounded">render_camera_image</code> from Part 2.5, but returns depth 
              maps instead of RGB images. The depth maps are normalized to [0, 1] and rendered as a grayscale video using 
              the same camera trajectory as the spherical rendering.
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="text-gray-700 text-left">
              <strong>Deliverables:</strong> Depth map video for the Lego scene.
            </p>
          </div>

          {/* Depth map video */}
          <div className="text-center">
            <img 
              src={legoDepthMap} 
              alt="Lego Depth Map Video" 
              className="w-full max-w-xl mx-auto object-contain rounded-lg shadow-lg mb-2"
            />
            <p className="text-sm text-gray-600">Depth map video for the Lego scene rendered using the same camera trajectory</p>
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

export default Project4

