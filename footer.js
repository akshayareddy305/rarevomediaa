/* RAREVO - one shared footer for every page.
   Edit the footer ONLY here (footer.js). Every page loads this file,
   so a change here updates the whole website.
   Each page has:  <div id="site-footer"></div><script src="footer.js"></script>  */
(function () {
  var mount = document.getElementById("site-footer");
  if (!mount) return;
  mount.outerHTML = `<footer class="rarevo-footer">
  <div class="rarevo-footer-top">
    <div>
      <div class="rarevo-footer-logo">RARE<span>VO</span></div>
      <p class="rarevo-footer-description">Websites, e-commerce, branding and digital marketing for businesses ready to grow online.</p>
    </div>
    <div class="rarevo-footer-links">
      <div class="rarevo-footer-column">
        <h4>EXPLORE</h4>
        <a href="index.html">Home</a>
        <a href="work.html">Work</a>
        <a href="services.html">Services</a>
        <a href="team.html">Team</a>
        <a href="about.html">About</a>
        <a href="founder.html">Founder</a>
      </div>
      <div class="rarevo-footer-column">
        <h4>FOLLOW US</h4>
        <a href="https://www.instagram.com/rarevo__?stkn=bHd3cmw3cmZneDg2" target="_blank" rel="noopener">@rarevo__ · Studio</a>
        <a href="https://www.instagram.com/rarevomedia.in?stkn=OGgza2xzYnNobXg3" target="_blank" rel="noopener">@rarevomedia.in · Social &amp; Marketing</a>
      </div>
      <div class="rarevo-footer-column">
        <h4>CONNECT</h4>
        <a href="https://wa.me/916301559694" target="_blank" rel="noopener">WhatsApp · We reply fast</a>
        <a href="contact.html">Contact Form</a>
      </div>
    </div>
  </div>
  <div class="rarevo-footer-bottom">
    <span>© ${new Date().getFullYear()} Rarevo. All rights reserved.</span>
    <span>DESIGN · DEVELOPMENT · MARKETING</span>
  </div>
</footer>`;
})();
