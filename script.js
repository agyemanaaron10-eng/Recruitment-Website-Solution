<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Recruitment Solutions</title>
  <link rel="stylesheet" href="style.css" />
</head>

<body>
  <!-- TOP NAV -->
  <header class="topbar">
    <div class="brand">
      <img src="logo.png" class="logo" alt="Recruitment Solutions logo" />
      <div class="brand-text">
        <h1>Recruitment Solutions</h1>
        <p>Search jobs and apply online</p>
      </div>
    </div>

    <nav class="nav">
      <a href="#home">Home</a>
      <a href="#jobs">Jobs</a>
      <a href="#about">About Us</a>
      <a href="#contact" class="nav-btn">Contact</a>
    </nav>
  </header>

  <!-- HERO -->
  <main id="home" class="hero">
    <div class="hero-inner">
      <div class="hero-left">
        <h2>Find your next job faster</h2>
        <p>Use the search to find roles that match your skills and apply in minutes.</p>

        <div class="search-box">
          <input id="searchInput" type="text" placeholder="Search job title or keyword" />
          <select id="locationSelect">
            <option value="">Any location</option>
            <option>London</option>
            <option>Manchester</option>
            <option>Remote</option>
          </select>
          <button id="searchBtn">Search</button>
        </div>

        <div class="hero-buttons">
          <a class="btn primary" href="#jobs">View Jobs</a>
          <a class="btn secondary" href="#contact">Apply Help</a>
        </div>

        <p class="small-note">Tip: Click “Apply Now” on a job to open the quick application form.</p>
      </div>

      <div class="hero-right">
        <div class="banner-card">
          <img src="banner.png" alt="Website banner" />
        </div>
      </div>
    </div>
  </main>

  <!-- JOBS -->
  <section id="jobs" class="section">
    <div class="section-head">
      <h3>Featured Jobs</h3>
      <p>These roles are highlighted to help you apply quickly.</p>
    </div>

    <div class="jobs-grid" id="jobsGrid">
      <!-- Job 1 -->
      <article class="job-card" data-title="Junior Web Developer" data-location="London">
        <h4>Junior Web Developer</h4>
        <p class="meta">Location: London • Type: Full-time</p>
        <p>Build and update website pages using HTML, CSS and basic JavaScript.</p>
        <button class="apply-btn" data-job="Junior Web Developer">Apply Now</button>
      </article>

      <!-- Job 2 -->
      <article class="job-card" data-title="IT Support Assistant" data-location="Manchester">
        <h4>IT Support Assistant</h4>
        <p class="meta">Location: Manchester • Type: Part-time</p>
        <p>Help users with login issues, basic troubleshooting, and simple support tasks.</p>
        <button class="apply-btn" data-job="IT Support Assistant">Apply Now</button>
      </article>

      <!-- Job 3 -->
      <article class="job-card" data-title="Digital Marketing Intern" data-location="Remote">
        <h4>Digital Marketing Intern</h4>
        <p class="meta">Location: Remote • Type: Internship</p>
        <p>Support social media posts and help update website content and banners.</p>
        <button class="apply-btn" data-job="Digital Marketing Intern">Apply Now</button>
      </article>
    </div>
  </section>

  <!-- ABOUT -->
  <section id="about" class="section">
    <div class="section-head">
      <h3>About Us</h3>
      <p>Recruitment Solutions helps job seekers find jobs and apply online. Our goal is to keep the process simple and clear.</p>
    </div>

    <div class="about-box">
      <div class="about-item">
        <h4>What we do</h4>
        <p>We advertise job vacancies, help applicants apply online, and support employers with recruiting.</p>
      </div>
      <div class="about-item">
        <h4>Why it helps</h4>
        <p>Applicants can search jobs, apply quickly, and contact us if they need help.</p>
      </div>
      <div class="about-item">
        <h4>Who it’s for</h4>
        <p>Job seekers, employers, and trainees who want an easy recruitment website.</p>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section id="contact" class="section">
    <div class="section-head">
      <h3>Contact</h3>
      <p>If you need help applying, send us a message.</p>
    </div>

    <form class="contact-form" id="contactForm">
      <div class="grid-2">
        <div>
          <label>Full Name</label>
          <input id="name" type="text" placeholder="Your name" required />
        </div>
        <div>
          <label>Email</label>
          <input id="email" type="email" placeholder="Your email" required />
        </div>
      </div>

      <div>
        <label>Message</label>
        <textarea id="message" placeholder="Type your message..." required></textarea>
      </div>

      <div class="form-actions">
        <button type="submit" class="btn primary">Send Message</button>
        <span class="confirm" id="confirmText"></span>
      </div>

      <p class="small-note">After submitting, you will see a confirmation message.</p>
    </form>

    <!-- Quick Apply (hidden until clicking Apply Now) -->
    <div class="apply-box" id="applyBox">
      <h4>Quick Apply</h4>
      <p class="small-note">Applying for: <strong id="applyJobName">Job</strong></p>

      <form id="applyForm">
        <div class="grid-2">
          <div>
            <label>Full Name</label>
            <input type="text" id="applyName" placeholder="Your name" required />
          </div>
          <div>
            <label>Email</label>
            <input type="email" id="applyEmail" placeholder="Your email" required />
          </div>
        </div>

        <div>
          <label>Why should we choose you?</label>
          <textarea id="applyReason" placeholder="Short reason..." required></textarea>
        </div>

        <div class="form-actions">
          <button type="submit" class="btn secondary">Submit Application</button>
          <span class="confirm" id="applyConfirm"></span>
        </div>
      </form>
    </div>
  </section>

  <footer class="footer">
    <p>© 2025 Recruitment Solutions • One-page prototype website</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
