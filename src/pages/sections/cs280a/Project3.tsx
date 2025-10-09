import { Link } from 'react-router-dom'
import 'katex/dist/katex.min.css'
import { InlineMath } from 'react-katex'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

// Import project images
import { testRectification1, testRectification2, testRectification3, pointCorrespondences1, pointCorrespondences2, hellerPatio1, hellerPatio2, hellerPatio3, cathedral1, cathedral2, cathedral3, fountain1, fountain2, fountain3, finalMosaic1, finalMosaic2, finalMosaic3, cylindricalMosaic } from '../../../assets/cs280a/proj3'

function Project3() {
  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Project 3: Image Warping and Mosaicing
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
          Part A: Image Registration and Mosaicing
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          CS280A: Intro to Computer Vision and Computational Photography
        </p>
        <div className="prose prose-lg max-w-none">
          <a href="https://cal-cs180.github.io/fa25/hw/proj3/partA.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-lg hover:text-blue-800 underline">
            Official CS280A Project 3A page
          </a>
        </div>
        <div className="prose prose-lg max-w-none">
          <a href="https://cal-cs180.github.io/fa25/hw/proj3/partB.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-lg hover:text-blue-800 underline">
            Official CS280A Project 3B page
          </a>
        </div>
      </div>

      {/* Project Overview */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Project Overview</h2>
        <div className="max-w-6xl mx-auto mb-8">
          <p className="text-lg text-gray-700 text-left">
            This project is divided into two main parts: <strong>Part A</strong> focuses on 
            shooting and digitizing photographs, recovering homographies from point correspondences, 
            and warping images to create a variety of blended mosaics. 
            <strong>Part B</strong> explores advanced image warping techniques such as corner detection, 
            extracting feature points and descriptors from images, and matching feature points across images.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-left">Part A: Image Warping and Mosaicing</h3>
              <ul className="text-gray-700 space-y-2 text-left">
                <li><strong>A.1:</strong> Shoot and digitize pictures (20 pts)</li>
                <li><strong>A.2:</strong> Recover homographies (20 pts)</li>
                <li><strong>A.3:</strong> Warp the images (20 pts)</li>
                <li><strong>A.4:</strong> Blend images into a mosaic (20 pts)</li>
                <li><strong>A.5:</strong> Bells and Whistles (Mandatory for CS280A)</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-left">Part B: Coming Soon!</h3>
              <p className="text-gray-600 text-left">
                Part B will be implemented in the next phase of this project. 
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Part A.1: Shoot the Pictures */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Part A.1: Shoot the Pictures</h2>
        <div className="max-w-6xl mx-auto mb-8">
          <p className="text-lg text-gray-700 text-left mb-6">
            I shot several photographs of 3 different scenes such that the transforms between them are 
            projective (perspective). This means that the camera's center of projection (COP) is fixed 
            and the camera is rotated while capturing photos.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="text-gray-700 text-left">
              <strong>Deliverables:</strong> Show at least 2 sets of images with projective transformations 
              between them (fixed center of projection, rotate camera).
            </p>
          </div>

          {/* Image Sets */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-left">Image Sets for Mosaicing</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
              <div className="text-center">
                <img 
                  src={hellerPatio1} 
                  alt="Heller Patio Image 1" 
                  className="w-full object-contain rounded-lg shadow-lg mb-2"
                />
                <h5 className="text-sm font-semibold text-gray-900">Heller Patio 1</h5>
              </div>
              <div className="text-center">
                <img 
                  src={hellerPatio2} 
                  alt="Heller Patio Image 2" 
                  className="w-full object-contain rounded-lg shadow-lg mb-2"
                />
                <h5 className="text-sm font-semibold text-gray-900">Heller Patio 2</h5>
              </div>
              <div className="text-center">
                <img 
                  src={hellerPatio3} 
                  alt="Heller Patio Image 3" 
                  className="w-full object-contain rounded-lg shadow-lg mb-2"
                />
                <h5 className="text-sm font-semibold text-gray-900">Heller Patio 3</h5>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
              <div className="text-center">
                <img 
                  src={cathedral1} 
                  alt="Cathedral Image 1" 
                  className="w-full object-contain rounded-lg shadow-lg mb-2"
                />
                <h5 className="text-sm font-semibold text-gray-900">Cathedral 1</h5>
              </div>
              <div className="text-center">
                <img 
                  src={cathedral2} 
                  alt="Cathedral Image 2" 
                  className="w-full object-contain rounded-lg shadow-lg mb-2"
                />
                <h5 className="text-sm font-semibold text-gray-900">Cathedral 2</h5>
              </div>
              <div className="text-center">
                <img 
                  src={cathedral3} 
                  alt="Cathedral Image 3" 
                  className="w-full object-contain rounded-lg shadow-lg mb-2"
                />
                <h5 className="text-sm font-semibold text-gray-900">Cathedral 3</h5>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="text-center">
                <img 
                  src={fountain1} 
                  alt="Fountain Image 1" 
                  className="w-full object-contain rounded-lg shadow-lg mb-2"
                />
                <h5 className="text-sm font-semibold text-gray-900">Fountain 1</h5>
              </div>
              <div className="text-center">
                <img 
                  src={fountain2} 
                  alt="Fountain Image 2" 
                  className="w-full object-contain rounded-lg shadow-lg mb-2"
                />
                <h5 className="text-sm font-semibold text-gray-900">Fountain 2</h5>
              </div>
              <div className="text-center">
                <img 
                  src={fountain3} 
                  alt="Fountain Image 3" 
                  className="w-full object-contain rounded-lg shadow-lg mb-2"
                />
                <h5 className="text-sm font-semibold text-gray-900">Fountain 3</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Part A.2: Recover Homographies */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Part A.2: Recover Homographies</h2>
        <div className="max-w-6xl mx-auto mb-8">
          <p className="text-lg text-gray-700 text-left mb-6">
            To enable image alignment and mosaic creation, I implemented homography recovery to compute the 
            transformation parameters between each pair of images. The transformation is a homography: <InlineMath math="p' = Hp" />, 
            where H is a 3x3 matrix with 8 degrees of freedom (the lower-right corner is normalized to 1).
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-left">Homography Recovery</h3>
          <p className="text-lg text-gray-700 text-left mb-4">
            I developed a function of the form:
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <code className="text-lg">H = computeH(im1_pts, im2_pts)</code>
          </div>
          <p className="text-lg text-gray-700 text-left mb-6">
            where <code>im1_pts</code> and <code>im2_pts</code> are n x 2 matrices holding the (x,y) locations 
            of n point correspondences from the two images and <code>H</code> is the recovered 3x3 homography matrix.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-left">Mathematical Foundation</h3>
          <p className="text-lg text-gray-700 text-left mb-4">
            The algorithm uses a least-squares formulation with <InlineMath math="h_{33} = 1" />, resulting 
            in 8 unknowns that are solved using the linear system <InlineMath math="Ah = b" />.
          </p>
          <p className="text-lg text-gray-700 text-left mb-4">
            Each point correspondence <InlineMath math="(x,y) \leftrightarrow (x',y')" /> generates two 
            linear equations which can be used to solve for the homography matrix H:
          </p>
          <div className="my-4">
            <InlineMath math="x' = \frac{h_{11}x + h_{12}y + h_{13}}{h_{31}x + h_{32}y + h_{33}}, \quad y' = \frac{h_{21}x + h_{22}y + h_{23}}{h_{31}x + h_{32}y + h_{33}}" />
          </div>
          <p className="text-lg text-gray-700 text-left mb-4">
            By providing more than the minimum of 4 required point correspondences, we can create an overdetermined 
            system that can be solved using least-squares regression via <code>np.linalg.lstsq()</code>: 
            <InlineMath math="h = (A^T A)^{-1} A^T b" />.
          </p>

          <p className="text-lg text-gray-700 text-left mb-4">
            To improve numerical stability, I implemented coordinate normalization following 
            Hartley's Normalization method: 
          </p>
          <ul className="text-lg text-gray-700 mb-6 list-disc list-inside space-y-2 text-left">
            <li><strong>Centroid computation:</strong> Calculate the centroid of each point set</li>
            <li><strong>Scale factor:</strong> Compute <InlineMath math="s = \sqrt{2} / \text{(mean distance from centroid)}" /> 
            for each image</li>
            <li><strong>Normalization matrices:</strong> Create similarity transforms <InlineMath math="T_1" /> and <InlineMath math="T_2" /> to normalize coordinates</li>
            <li><strong>Denormalization:</strong> Apply <InlineMath math="H = T_2^{-1} H_{norm} T_1" /> to recover the final homography</li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-left">Point Correspondence Selection</h3>
          <p className="text-lg text-gray-700 text-left mb-4">
            I implemented an interactive point selection system using matplotlib's <code> ginput()</code> 
            function that visualizes correspondences with numbered markers to make it easier to remember the
            manually selected features across both images. This enables me to select several points in order
            to improve the robustness of our least-squares approach for solving the homography matrix. These 
            point correspondences and the resulting homography matrix are subsequently saved in a .txt file 
            for later reference.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-left">Quality Assessment</h3>
          <p className="text-lg text-gray-700 text-left mb-4">
            Once we had our homography matrix and final system of equations, I implemented some metrics to track
            quality of the homography recovery. The first metric included was the <strong> Mean pixel-wise reprojection error</strong>,
            which applied the recovered homography to original points and measured pixel-wise error. The formula for this metric was:
            <InlineMath math="\frac{1}{n} \sum_{i=1}^{n} ||p_i' - H p_i||" /> where <InlineMath math="p_i'" /> are the actual 
            correspondences. I also implemented a <strong>relative error metric</strong>, which expressed this previous result as a 
            percentage of image dimensions for context. This metric was particularly valuable for assessing the homography recovery 
            at a glance. Finally, I implemented a <strong>matrix structure validation</strong>, which verified that the bottom row is 
            approximately <InlineMath math="[0, 0, 1]" />.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="text-gray-700 text-left">
              <strong>Deliverables:</strong> Implement computeH(im1_pts, im2_pts) function. Show correspondences 
              visualized on the images, system of equations, and recovered homography matrix.
            </p>
          </div>

          {/* Homography Recovery Results */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-left">Homography Recovery Results</h3>            
            <div className="mb-8">
              <div className="space-y-8 max-w-6xl mx-auto">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-600">Heller Patio 2 - Heller Patio 3</h3>
                  <img 
                    src={pointCorrespondences1} 
                    alt="Point Correspondences Visualization 1" 
                    className="w-full max-w-4xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-600">Cathedral 1 - Cathedral 2</h3>
                  <img 
                    src={pointCorrespondences2} 
                    alt="Point Correspondences Visualization 2" 
                    className="w-full max-w-4xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                  />
                </div>
              </div>
            </div>

            {/* First Homography Results */}
            <div className="mb-8">
              <h5 className="text-lg font-semibold text-gray-900 mb-4 text-left">Homography Recovery Results: Heller Patio Pair</h5>
              <SyntaxHighlighter
                language="text"
                style={vscDarkPlus}
                customStyle={{
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  padding: '1.5rem',
                  margin: 0
                }}
                showLineNumbers={false}
              >
                {`Homography Recovery Results: Heller Patio 2 - Heller Patio 3
==================================================
POINT CORRESPONDENCES:
------------------------------
Pair 1: (1645.8, 1850.2) <-> (623.2, 1881.3)
Pair 2: (2668.9, 1850.2) <-> (1757.0, 1871.0)
Pair 3: (3301.4, 2271.9) <-> (2285.8, 2251.2)
Pair 4: (2855.5, 1134.7) <-> (1947.1, 1193.5)
Pair 5: (2838.2, 723.4) <-> (1940.1, 813.3)
Pair 6: (2406.2, 747.6) <-> (1535.7, 768.4)
Pair 7: (2423.5, 1145.1) <-> (1532.3, 1165.9)
Pair 8: (2969.6, 2500.0) <-> (1992.0, 2489.7)

SYSTEM OF EQUATIONS:
------------------------------
Each point correspondence (x,y) <-> (x',y') gives 2 equations:

Point 1: (1645.8, 1850.2) <-> (623.2, 1881.3)
  Equation 1: 623.2 = (h11*1645.8 + h12*1850.2 + h13) / (h31*1645.8 + h32*1850.2 + h33)
  Equation 2: 1881.3 = (h21*1645.8 + h22*1850.2 + h23) / (h31*1645.8 + h32*1850.2 + h33)
  Rearranged: 623.2*(h31*1645.8 + h32*1850.2 + h33) = h11*1645.8 + h12*1850.2 + h13
              1881.3*(h31*1645.8 + h32*1850.2 + h33) = h21*1645.8 + h22*1850.2 + h23

Point 2: (2668.9, 1850.2) <-> (1757.0, 1871.0)
  Equation 1: 1757.0 = (h11*2668.9 + h12*1850.2 + h13) / (h31*2668.9 + h32*1850.2 + h33)
  Equation 2: 1871.0 = (h21*2668.9 + h22*1850.2 + h23) / (h31*2668.9 + h32*1850.2 + h33)
  Rearranged: 1757.0*(h31*2668.9 + h32*1850.2 + h33) = h11*2668.9 + h12*1850.2 + h13
              1871.0*(h31*2668.9 + h32*1850.2 + h33) = h21*2668.9 + h22*1850.2 + h23

Point 3: (3301.4, 2271.9) <-> (2285.8, 2251.2)
  Equation 1: 2285.8 = (h11*3301.4 + h12*2271.9 + h13) / (h31*3301.4 + h32*2271.9 + h33)
  Equation 2: 2251.2 = (h21*3301.4 + h22*2271.9 + h23) / (h31*3301.4 + h32*2271.9 + h33)
  Rearranged: 2285.8*(h31*3301.4 + h32*2271.9 + h33) = h11*3301.4 + h12*2271.9 + h13
              2251.2*(h31*3301.4 + h32*2271.9 + h33) = h21*3301.4 + h22*2271.9 + h23

Point 4: (2855.5, 1134.7) <-> (1947.1, 1193.5)
  Equation 1: 1947.1 = (h11*2855.5 + h12*1134.7 + h13) / (h31*2855.5 + h32*1134.7 + h33)
  Equation 2: 1193.5 = (h21*2855.5 + h22*1134.7 + h23) / (h31*2855.5 + h32*1134.7 + h33)
  Rearranged: 1947.1*(h31*2855.5 + h32*1134.7 + h33) = h11*2855.5 + h12*1134.7 + h13
              1193.5*(h31*2855.5 + h32*1134.7 + h33) = h21*2855.5 + h22*1134.7 + h23

RECOVERED HOMOGRAPHY MATRIX H:
------------------------------
H = 
    [  1.8227   -0.0945  -2007.0611]
    [  0.3943    1.4641  -886.6215]
    [  0.0002   -0.0000    1.0000]

QUALITY METRICS:
------------------------------
Mean reprojection error: 4.411 pixels
Relative error: 0.08% of image height
Quality: Acceptable`}
              </SyntaxHighlighter>
            </div>

            {/* Second Homography Results */}
            <div className="mb-8">
              <h5 className="text-lg font-semibold text-gray-900 mb-4 text-left">Homography Recovery Results: Horizontal Pair</h5>
              <SyntaxHighlighter
                language="text"
                style={vscDarkPlus}
                customStyle={{
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  padding: '1.5rem',
                  margin: 0
                }}
                showLineNumbers={false}
              >
                {`Homography Recovery Results: Cathedral 1 - Cathedral 2
==================================================
POINT CORRESPONDENCES:
------------------------------
Pair 1: (3058.5, 954.0) <-> (1847.8, 843.5)
Pair 2: (3770.0, 319.4) <-> (2607.4, 353.1)
Pair 3: (3928.7, 314.6) <-> (2751.6, 362.7)
Pair 4: (4765.2, 747.3) <-> (3453.6, 930.0)
Pair 5: (3871.0, 2405.9) <-> (2569.0, 2391.5)
Pair 6: (3568.1, 2593.4) <-> (2270.9, 2555.0)
Pair 7: (2842.2, 2593.4) <-> (1482.4, 2545.3)
Pair 8: (4318.1, 2579.0) <-> (2963.2, 2559.8)

SYSTEM OF EQUATIONS:
------------------------------
Each point correspondence (x,y) <-> (x',y') gives 2 equations:

Point 1: (3058.5, 954.0) <-> (1847.8, 843.5)
  Equation 1: 1847.8 = (h11*3058.5 + h12*954.0 + h13) / (h31*3058.5 + h32*954.0 + h33)
  Equation 2: 843.5 = (h21*3058.5 + h22*954.0 + h23) / (h31*3058.5 + h32*954.0 + h33)
  Rearranged: 1847.8*(h31*3058.5 + h32*954.0 + h33) = h11*3058.5 + h12*954.0 + h13
              843.5*(h31*3058.5 + h32*954.0 + h33) = h21*3058.5 + h22*954.0 + h23

Point 2: (3770.0, 319.4) <-> (2607.4, 353.1)
  Equation 1: 2607.4 = (h11*3770.0 + h12*319.4 + h13) / (h31*3770.0 + h32*319.4 + h33)
  Equation 2: 353.1 = (h21*3770.0 + h22*319.4 + h23) / (h31*3770.0 + h32*319.4 + h33)
  Rearranged: 2607.4*(h31*3770.0 + h32*319.4 + h33) = h11*3770.0 + h12*319.4 + h13
              353.1*(h31*3770.0 + h32*319.4 + h33) = h21*3770.0 + h22*319.4 + h23

Point 3: (3928.7, 314.6) <-> (2751.6, 362.7)
  Equation 1: 2751.6 = (h11*3928.7 + h12*314.6 + h13) / (h31*3928.7 + h32*314.6 + h33)
  Equation 2: 362.7 = (h21*3928.7 + h22*314.6 + h23) / (h31*3928.7 + h32*314.6 + h33)
  Rearranged: 2751.6*(h31*3928.7 + h32*314.6 + h33) = h11*3928.7 + h12*314.6 + h13
              362.7*(h31*3928.7 + h32*314.6 + h33) = h21*3928.7 + h22*314.6 + h23

Point 4: (4765.2, 747.3) <-> (3453.6, 930.0)
  Equation 1: 3453.6 = (h11*4765.2 + h12*747.3 + h13) / (h31*4765.2 + h32*747.3 + h33)
  Equation 2: 930.0 = (h21*4765.2 + h22*747.3 + h23) / (h31*4765.2 + h32*747.3 + h33)
  Rearranged: 3453.6*(h31*4765.2 + h32*747.3 + h33) = h11*4765.2 + h12*747.3 + h13
              930.0*(h31*4765.2 + h32*747.3 + h33) = h21*4765.2 + h22*747.3 + h23

RECOVERED HOMOGRAPHY MATRIX H:
------------------------------
H = 
    [  1.7822   -0.0933  -2761.8883]
    [  0.3735    1.4737  -1359.5691]
    [  0.0001    0.0000    1.0000]

QUALITY METRICS:
------------------------------
Mean reprojection error: 6.734 pixels
Relative error: 0.12% of image height
Quality: Moderate`}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>

      {/* Part A.3: Warp the Images */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Part A.3: Warp the Images</h2>
        <div className="max-w-6xl mx-auto mb-8">
          <p className="text-lg text-gray-700 text-left mb-6">
            Now that we're able to calculate the homography, I can use the matrix H to warp each image 
            towards a specified reference image. In order to test this out, we can implement two warping
            functions that take in an image and a homography matrix and return the warped image. The two 
            strategies we will use are nearest neighbor interpolation and bilinear interpolation.
            <br />
            <br />
            <strong>Note:</strong> I used inverse warping to avoid holes in the output image.
          </p>
          
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <div className="space-y-2">
              <div><code className="text-lg">imwarped_nn = warpImageNearestNeighbor(im, H)</code></div>
              <div><code className="text-lg">imwarped_bil = warpImageBilinear(im, H)</code></div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="text-gray-700 text-left">
              <strong>Deliverables:</strong> Implement warpImageNearestNeighbor(im, H) and warpImageBilinear(im, H) 
              using inverse warping. Apply to 2+ images for rectification. Show comparisons.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-left">Rectification</h3>
          <p className="text-lg text-gray-700 text-left mb-6">
            Once I got the warping functions working, I tested them out on a few test images to perform 
            "rectification". I chose images containing a notebook, a stairwell sign, and a poster in my room
            since these were all known rectangular objects, and hence would make good test cases for visualizing 
            the differences between the two interpolation methods.
          </p>

          {/* Rectification Results */}
          <div className="mb-8">
            <div className="space-y-8 max-w-6xl mx-auto">
              <div className="text-center">
                <h5 className="text-lg font-semibold text-gray-900">Rectification Test 1</h5>
                <img 
                  src={testRectification1} 
                  alt="Rectification Test 1" 
                  className="w-full max-w-4xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                />
              </div>
              <div className="text-center">
                <h5 className="text-lg font-semibold text-gray-900">Rectification Test 2</h5>
                <img 
                  src={testRectification2} 
                  alt="Rectification Test 2" 
                  className="w-full max-w-4xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                />
              </div>
              <div className="text-center">
                <h5 className="text-lg font-semibold text-gray-900">Rectification Test 3</h5>
                <img 
                  src={testRectification3} 
                  alt="Rectification Test 3" 
                  className="w-full max-w-4xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                />
              </div>
            </div>
          </div>

          {/* Interpolation Method Comparison */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 text-left">Interpolation Method Comparison</h4>
            <p className="text-lg text-gray-700 text-left mb-6">
              Using nearest neighbor vs. bilinear interpolation has some significantly noticeable impacts on the quality
              and characteristics of the rectified images. Through visual analysis of the aforementioned test results,
              we can identify some key trade-offs below:
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
              <p className="text-lg text-gray-700 text-left mb-4">
                <strong>Nearest Neighbor Interpolation</strong> produces images with a more "pixelated" appearance, 
                and this is particularly noticeable in areas with gradual color transitions or fine details. E.g. the
                green NVIDIA text and logo on the notebook, and the blurring of the text on the stairwell sign and poster.
                Using this method can introduce unintended jagged edges and "blockiness" in images where there may be a 
                greater perspective distortion. However, this method is computationally efficient and preserves the 
                original pixel values exactly, making it ideal for applications where data integrity is crucial/necessary.
                In terms of runtime, this method is noticeably faster than bilinear interpolation (approx. 2-2.5x faster).
              </p>
              <p className="text-lg text-gray-700 text-left mb-4">
                <strong>Bilinear Interpolation</strong> in contrast, provides smoother and more visually appealing results.
                This is because the strategy here is to average the values of the four neighboring pixels to compute a weighted 
                average of the pixel value. This creates a more natural appearance with reduced aliasing artifacts and 
                smoother gradients. The method is particularly effective for rectifying images containing text and images with  
                irregular edges and shapes where smoothness may also be important. However, bilinear interpolation also 
                introduces slight blurring and can soften fine details, reducing the overall sharpness of the image. This is
                particularly noticeable in the stairwell sign and poster. In terms of runtime, this method is noticeably slower
                than nearest neighbor interpolation (approx. 2-2.5x slower).
              </p>
              <p className="text-lg text-gray-700 text-left">
                <strong>Therefore for rectification tasks, bilinear interpolation is generally preferred</strong> as it 
                produces more visually accurate and appealing results. When the resulting images are used in further 
                analysis or presentation, their smoother appearance helps maintain the perceived quality of rectified
                rectangular, irregular, and smooth objects alike and they appear more natural. The trade-off of this
                computationally expensive method is minimal compared to the significant visual improvement it provides.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Part A.4: Blend Images into Mosaic */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Part A.4: Blend Images into a Mosaic</h2>
        <div className="max-w-6xl mx-auto mb-8">
          <p className="text-lg text-gray-700 text-left mb-6">
            Now that we can warp images, we can finally create a stitched image mosaic. I implemented a comprehensive 
            <strong>mosaicing pipeline</strong> that chains pairwise homographies into a common coordinate frame using 
            <strong>homography composition</strong>, computes a global canvas using <strong>percentile-based bounds estimation</strong> 
            with configurable grid sampling, and warps each image using our custom bilinear warper. The blending system employs 
            a sophisticated <strong>distance-transform feather mask</strong> combined with <strong>Gaussian blurring</strong>, 
            multiplied by the valid alpha channel from inverse warping to create seamless transitions.
          </p>

          <p className="text-lg text-gray-700 text-left mb-6">
            For multi-image mosaics, I implemented a <strong>multi-band Laplacian pyramid blending</strong> approach that 
            minimizes wedge-like artifacts by blending at multiple frequency levels. The algorithm decomposes each warped 
            image into a Gaussian pyramid, computes Laplacian pyramids, and applies <strong>level-wise normalized masks</strong> 
            to blend corresponding frequency bands before reconstructing the final mosaic. This ensures smooth gradients and 
            natural-looking seams even across complex overlapping regions with varying illumination and perspective distortions.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-left">Key Helper Functions</h3>
          <ul className="text-lg text-gray-700 mb-6 list-disc list-inside space-y-2 text-left">
            <li><code>build_transforms_to_base()</code> - Chains pairwise homographies into a common coordinate frame using matrix composition</li>
            <li><code>compute_canvas_bounds()</code> - Intelligently computes global canvas size using percentile-based bounds estimation with memory constraints</li>
            <li><code>warp_rgb_and_weight()</code> - Simultaneously warps RGB images and distance-transform masks using our custom bilinear warper</li>
            <li><code>crop_to_content()</code> - Automatically crops the final mosaic to the union of valid regions, removing empty space</li>
            <li><code>distance_transform_mask()</code> - Generates normalized distance-to-edge masks for sophisticated feathering</li>
            <li><code>multiband_blend()</code> - Implements Laplacian pyramid blending with level-wise normalized weights</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="text-gray-700 text-left">
              <strong>Deliverables:</strong> Show 3 mosaics with source images. Use weighted averaging or 
              blending to reduce edge artifacts. Explain the procedure.
            </p>
          </div>

          {/* Final Mosaics */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 text-left">Final Mosaic Results</h4>
            <div className="space-y-8 max-w-6xl mx-auto">
              <div className="text-center">
                <h5 className="text-lg font-semibold text-gray-900 mb-2">Mosaic 1: Heller Patio Sequence</h5>
                <img 
                  src={finalMosaic1} 
                  alt="Final Mosaic 1 - Heller Patio" 
                  className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                />
                <p className="text-sm text-gray-600">Multi-image mosaic created from heller_patio sequence using multi-band blending</p>
              </div>
              <div className="text-center">
                <h5 className="text-lg font-semibold text-gray-900 mb-2">Mosaic 2: Cathedral Sequence</h5>
                <img 
                  src={finalMosaic2} 
                  alt="Final Mosaic 2 - Cathedral" 
                  className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                />
                <p className="text-sm text-gray-600">Multi-image mosaic created from cathedral sequence using multi-band blending</p>
              </div>
              <div className="text-center">
                <h5 className="text-lg font-semibold text-gray-900 mb-2">Mosaic 3: Fountain Sequence</h5>
                <img 
                  src={finalMosaic3} 
                  alt="Final Mosaic 3 - Fountain" 
                  className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg mb-2"
                />
                <p className="text-sm text-gray-600">Multi-image mosaic created from fountain sequence using multi-band blending</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Part A.5: Bells & Whistles */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Part A.5: Bells & Whistles (Mandatory for CS280A)</h2>
        <div className="max-w-6xl mx-auto mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-left">Spherical/Cylindrical/Polar Mapping</h3>
          <p className="text-lg text-gray-700 text-left mb-6">
            Instead of projecting the mosaic onto a plane, try using another surface, such as a sphere or a cylinder. 
            This is often a better way to represent really wide mosaics. Be clever: do the inverse sampling from 
            the original pre-warped images to make the mosaic the best possible resolution. Pick the focal length 
            (radius) that looks good.
          </p>

          {/* Cylindrical Mosaic Result */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 text-left">Cylindrical Mosaic Implementation</h4>
            <div className="text-center">
              <img 
                src={cylindricalMosaic} 
                alt="Cylindrical Mosaic" 
                className="w-full max-w-6xl mx-auto object-contain rounded-lg shadow-lg mb-2"
              />
              <p className="text-sm text-gray-600">Cylindrical projection mosaic demonstrating wide-angle panoramic representation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Part B: Coming Soon</h2>
        <div className="max-w-6xl mx-auto mb-8">
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Part B Implementation</h3>
            <p className="text-lg text-gray-600 mb-4">
              Part B of Project 3 will be implemented in the next phase. This section will include 
              more advanced mosaicing techniques and applications.
            </p>
            <div className="text-4xl text-gray-400">🚧</div>
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

export default Project3
