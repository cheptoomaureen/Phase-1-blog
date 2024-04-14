document.addEventListener('DOMContentLoaded', function() {
    const contentSection = document.getElementById('content');

    function showIndustryTrends() {
        contentSection.innerHTML = `
            <h2>Key Industry Trends</h2>
            <p>Industry trends are constantly evolving...
            IoT and Industry 4.0 are being compared to the industrial revolution and Henry Ford's mass production because they are changing the industry so drastically. Along with that comes AI and machine learning, robots providing safer work environments, improved speed and efficiency, and data/analytics. <li>Top 10 Industry 4.0 Trends in 2024,</li>
            <ol>Artificial Intelligence
            <li>Human Augmentation & Extended Reality,</li>
            <li>Edge, Fog & Cloud Computing,</li>
            <li>Network & Connectivity,</li>
            <li>Advanced Robotics,</li>
            <li>Internet of Everything,</li>
            <li>Big Data & Analytics,</li>
            <li>Additive Manufacturing,</li>
            <li>Cybersecurity, Transparency & Privacy,</li>
            <li>Digital Twin,</li></ol> </p>
        `;  
    }

    function showInnovativeTech() {
        contentSection.innerHTML = `
            <h2>Innovative Technologies</h2>
            <p>Exploring the latest innovations...<li>1. Generative-AI</li>
            <li>2. Computing Power</li> <li>3. Smart(er) Devices</li> <li>4. Datafication</li> <li>5. Artificial Intelligence (AI) and Machine Learning</li>
            <li>6. Extended Reality </li>
            </p>
        `;
    }

    function showBestPractices() {
        contentSection.innerHTML = `
            <h2>Best Practices</h2>
            <p>Implementing best practices in technology...<li>Streamline operations.</li>
            <li>Increase cross-functional visibility & efficiency.</li>
            <li>Automate manual processes.</li>
            <li>Bring new programs or strategic initiatives to life.</li>
            </p>
        `;
    }

    // Event listeners for navigation buttons
    document.getElementById('industryTrendsBtn').addEventListener('click', showIndustryTrends);
    document.getElementById('innovativeTechBtn').addEventListener('click', showInnovativeTech);
    document.getElementById('bestPracticesBtn').addEventListener('click', showBestPractices);

    // Initial content
    showIndustryTrends();
});
