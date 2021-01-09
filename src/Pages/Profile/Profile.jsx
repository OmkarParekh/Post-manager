import React from "react";
import "./Profile.css";
export default function Profile() {
  return (
    <div className="container profile_wrapper">
      <div className="d-flex align-items-center flex-wrap">
        <div className="profile-picture">
          <img
            src="https://lh4.googleusercontent.com/-5oDImgSbAzw/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmOmrpzXPAnnzUSiGNGQr5P7Ay_mA/s96-c/photo.jpg"
            alt="profile"
          />
        </div>
        <div className="d-flex flex-column ml-4">
          <h5 className="profile-name">Yash Purohit</h5>
          <a href="#edit" className="btn btn-edit">
            Edit Profile
          </a>
        </div>
        <div className="profile-description">
          <div className="font-weight-bold mb-1">Description:-</div>
          Warrior. Self-Improvement Content. Poetry & Podcasts. Health, Mental
          Fitness, Lifestyle, Romance. Co-founder @monkentertainment
        </div>
      </div>
      <hr />
      <div className="profile-post">
        <h3>Posts</h3>
        <div class="card bg-white my-4 postcard shadow">
          <h6 class="card-header">
            <img
              src="https://lh3.googleusercontent.com/a-/AOh14Gh-7ZIc-FCL5bZHTxB133L_1lonYB6OO2VvOgt0=s96-c"
              alt=""
            />
            Omkar Parekh
          </h6>
          <img
            src="https://res.cloudinary.com/o1m2k3a4r5/image/upload/v1609951209/nivgpspmmudnpir2gibe.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <div class="container"></div>
            <h5 class="card-title">My First Post</h5>
            <p class="card-text"></p>
            <div class="d-flex mb-3">
              <button type="button" class="btn post-btn">
                <img
                  src="/static/media/Icons-Fill-Heart.96214e05.svg"
                  class="like mb-1"
                  alt=""
                />
                Liked{" "}
              </button>
              <button
                type="button"
                class="btn post-btn"
                aria-describedby="popup-2"
              >
                <img src="/static/media/comment-alt.b76321b5.svg" alt="" />{" "}
                Comment
              </button>
              <button type="button" class="btn post-btn">
                <img src="/static/media/share.2d8b1e0a.png" alt="" /> Share
              </button>
            </div>
            <p class="card-text">Likes: 2 </p>
          </div>

          <div class="card-footer">
            <small class="">January 6, 2021</small>
          </div>
        </div>
        <div class="card bg-white my-4 postcard shadow">
          <h6 class="card-header">
            <img
              src="https://lh4.googleusercontent.com/-5oDImgSbAzw/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmOmrpzXPAnnzUSiGNGQr5P7Ay_mA/s96-c/photo.jpg"
              alt=""
            />{" "}
            Yash Purohit
          </h6>
          <img
            src="https://res.cloudinary.com/o1m2k3a4r5/image/upload/v1609836617/fgyhhgi5ep7jb9cgdpm5.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <div class="container"></div>
            <h5 class="card-title">workded</h5>
            <p class="card-text">workde</p>
            <div class="d-flex mb-3">
              <button type="button" class="btn post-btn">
                <img
                  src="/static/media/Icons-Fill-Heart.96214e05.svg"
                  class="like mb-1"
                  alt=""
                />
                Liked{" "}
              </button>
              <button
                type="button"
                class="btn post-btn"
                aria-describedby="popup-4"
              >
                {" "}
                <img src="/static/media/comment-alt.b76321b5.svg" alt="" />{" "}
                Comment
              </button>
              <button type="button" class="btn post-btn">
                <img src="/static/media/share.2d8b1e0a.png" alt="" /> Share
              </button>
            </div>
            <p class="card-text">Likes: 2 </p>
          </div>
          <div class="card-footer">
            <small class="">January 5, 2021</small>
          </div>
        </div>
      </div>
    </div>
  );
}
