import React, { useState } from "react";
import { Redirect } from "react-router-dom";
// import '../App.css'
import "./create.css";
import Axios from "axios";
import imgUpload from "./assets/file-upload.svg";
import { useDropzone } from "react-dropzone";

export default function Addpost() {
  const [fileImage, setFileImage] = useState(null);
  const [url, setURL] = useState(null);
  const [pt, setPt] = useState("");
  const [pd, setPd] = useState("");
  const [out, setOut] = useState(false);

  // function imageupload(e) {
  //   let images = e.target.files[0];
  //   setFileImage(images);
  //   setFile(URL.createObjectURL(e.target.files[0]));
  // }
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles[0]);
      setFileImage(acceptedFiles[0]);
      setURL(URL.createObjectURL(acceptedFiles[0]));
    },
  });
  console.log();
  async function dataupload(e) {
    console.log(fileImage);
    let file = fileImage;
    if (file === null) {
      if (pt === "") {
        alert("Please Provide Post Title");
      } else {
        const data = {
          Postname: pt,
          Description: pd,
          Date: Date.now(),
          Likes: 0,
        };
        Axios.post(
          // `http://localhost:7000/Create`
          `${window.url}/Create`,
          data,
          {
            headers: {
              Authorization: `post ${localStorage.getItem("token")}`,
            },
          }
        )
          .then((res) => {
            if (res.data.errors) {
              const path = Object.keys(res.data.errors);
              alert(`${path.map((d) => `${d}`)} Are Required`);
            }
            console.log(res);
            setOut(true);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      try {
        let formdata = new FormData();
        formdata.append("file", fileImage);
        const image = await Axios.post(
          // `http://localhost:7000/Create/upload`
          `${window.url}/Create/upload`,
          formdata,
          {
            headers: {
              Authorization: `post ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(image);
        if (image.data === "UnAuthorized") {
          console.log("UnAuthorized");
          alert("UnAuthorized");
        } else {
          const data = {
            Postname: pt,
            Description: pd,
            Date: Date.now(),
            path: {
              secure_uri: image.data.url,
              id: image.data.public_id,
            },
            Likes: 0,
          };
          const Post = await Axios.post(
            `${window.url}/Create`,
            // `http://localhost:7000/Create`
            data,
            {
              headers: {
                Authorization: `post ${localStorage.getItem("token")}`,
              },
            }
          );
          if (Post.data.errors) {
            const path = Object.keys(Post.data.errors);
            alert(`${path.map((d) => `${d}`)} Are Required`);
          }
          console.log(Post);
          setOut(true);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  function p_t(e) {
    setPt(e.target.value);
  }
  function p_d(e) {
    setPd(e.target.value);
  }
  if (out === true) {
    return <Redirect to="/home" />;
  }
  return (
    <div class="Create">
      {/* <center> */}
      <form>
        <div class="card border-0" id="addcar">
          <h1 class="text-primary">CREATE YOUR POST HERE</h1>
          {fileImage === null ? (
            <div></div>
          ) : (
            <img
              src={url}
              alt=""
              className="img-fluid addpostimg"
              id="addimg"
            />
          )}

          <div class="card-body">
            <div class="input-group mb-3">
              <div class="custom-file" {...getRootProps()}>
                <input
                  // onChange={imageupload}
                  class="custom-file-input"
                  id="inputGroupFile02"
                  {...getInputProps()}
                />
                <label
                  class="custom-file-label"
                  aria-describedby="inputGroupFileAddon02"
                >
                  {/* Choose File */}
                  <center>
                    <img
                      src={imgUpload}
                      alt="imgUpload"
                      className="upload-img"
                    />
                    <div className="drag-text">
                      {isDragActive
                        ? "Drag Image Here"
                        : "Drag and Drop the image or Click Here."}
                    </div>
                    {fileImage == null ? "Choose File" : fileImage.name}
                  </center>
                </label>
              </div>
            </div>
            <div class="form-group">
              <label class="text-primary">Post Title</label>
              <input type="text" class="form-control" onChange={p_t} />
            </div>
            <div class="form-group">
              <label class="text-primary">Description</label>
              <textarea
                class="form-control"
                id="exampleInputEmail1"
                onChange={p_d}
              />
            </div>

            <input
              type="button"
              class="btn btn-primary"
              value="Add"
              onClick={dataupload}
            />
          </div>
        </div>
      </form>
      {/* </center> */}
    </div>
  );
}
