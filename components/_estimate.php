 <section class="parallaxBgTwo" id="radical_estimate">
  <div class="container radical-estimate">
    <div class="row">
      <div class="col-md-6 col-lg-4 d-flex justify-content-center align-items-center">
        <div class="image-container">
          <img src="images/estimateHouse.jpg" alt="" />
          <div class="image-overlay">
            <div class="cool-border"></div><span>Request a Free <br /><strong>Estimate</strong></span>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-8 form-block">
        <form class="estimate" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post" id="estimate_form">
          <div class="row d-flex flex-column flex-lg-row">
            <div class="col-12 col-lg-4 input-block">
              <label for="name">Name</label>
              <input type="text" name="name" id="name" value="<?php if (isset($_POST['name']) ) { echo $_POST['name']; } ?>" required />
            </div>
            <div class="col-12 col-lg-4 input-block">
              <label for="email">Email</label>
              <input type="email" name="email" id="email" value="<?php if (isset($_POST['email']) ) { echo $_POST['email']; } ?>" required />
            </div>
            <div class="col-12 col-lg-4 input-block">
              <label for="phone_number">Phone Number</label>
              <input type="tel" name="phone_number" id="phone_number" value="<?php if (isset($_POST['phone_number']) ) { echo $_POST['phone_number']; } ?>" required />
            </div>
          </div>
          <div class="row pt-md-4">
            <div class="col input-block message-content">
              <label for="message">Message</label>
              <textarea name="message" id="message"><?php if (isset($_POST['message']) ) { echo $_POST['message']; } ?></textarea>
            </div>
          </div>
          <div class="row pt-4">
            <div class="col input-block submit-button">
              <input type="submit" name="submit" id="submit" value="Get an Estimate" />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
