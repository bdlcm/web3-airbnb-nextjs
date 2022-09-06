import { useState, useRef } from "react";
import { webClient, getRecord } from "../utils/identity";
import { TextField } from "@mui/material";
import { storeFiles } from "../database/put-files";

function RegisterHost() {
  const [bio, setBio] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [wallet, setWallet] = useState("");

  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const [profile, setProfile] = useState({});
  const [localDid, setDid] = useState(null);
  const [selfId, setSelfId] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [client, setclient] = useState({
    isConnected: false,
  });
  const selfIdRef = useRef(null);
  const didRef = useRef(null);
  selfIdRef.current = selfId;
  didRef.current = localDid;

  async function connect() {
    const cdata = await webClient();
    const { id, selfId, error } = cdata;
    if (error) {
      console.log("error: ", error);
      return;
    }
    setDid(id);
    setSelfId(selfId);
    const data = await selfId.get("basicProfile", id);
    if (data) {
      const { ethereum } = window;

      const accounts = await ethereum.request({ method: "eth_accounts" });

      setProfile(data);
      setclient({
        isConnected: true,
        address: accounts[0],
      });
    } else {
      setShowGreeting(true);
    }
    setLoaded(true);
  }

  async function updateProfile() {
    if (!price && !bio && !name && !title && !location) {
      console.log("error... no profile information submitted");
      return;
    }
    if (!selfId) {
      await connect();
    }
    const user = { ...profile };

    if (bio) user.bio = bio;
    if (name) user.name = name;
    if (price) user.price = price;
    if (title) user.title = title;
    if (location) user.location = location;
    if (client.address) user.walletAddress = client.address;

    await selfIdRef.current.set("basicProfile", user);
    setLocalProfileData();
    storeFiles(profile);
    console.log("profile updated...");
  }

  async function readProfile() {
    try {
      const { record } = await getRecord();
      if (record) {
        setProfile(record);
      } else {
        setShowGreeting(true);
      }
    } catch (error) {
      setShowGreeting(true);
    }
    setLoaded(true);
  }

  async function setLocalProfileData() {
    try {
      const data = await selfIdRef.current.get(
        "basicProfile",
        didRef.current.id
      );
      if (!data) return;
      setProfile(data);

      setShowGreeting(false);
    } catch (error) {
      console.log("error", error);
    }
  }

  //   useEffect(() => {
  //     connect();
  //   }, []);
  return (
    <div>
      {/* Navbar */}
      <nav className="fren-nav d-flex">
        <div className="d-flex" style={{ marginLeft: "auto" }}>
          <div>
            <button className="btn connect-btn" onClick={connect}>
              {client.isConnected ? (
                <>
                  {client.address.slice(0, 4)}...
                  {client.address.slice(38, 42)}
                </>
              ) : (
                <>Connect Wallet</>
              )}
            </button>
          </div>
          <div></div>
        </div>
      </nav>
      {/* Navbar end */}
      <div
        style={{
          paddingTop: 50,
          width: 500,
          margin: "0 auto",
          display: "flex",
          flex: 1,
        }}
      >
        <div className="flex flex-1 flex-col justify-center">
          <h1 className="text-5xl text-center">Post an airbnb</h1>
          <p className="text-xl text-center mt-2 text-gray-400"></p>

          {Object.keys(profile).length ? (
            <div className="mb-4">
              <h2 className="text-2xl font-semibold mt-6">{profile.name}</h2>
              <p className="text-gray-500 text-sm my-1">{profile.bio}</p>
              <p className="text-gray-500 text-sm my-1">{profile.location}</p>
              <p className="text-gray-500 text-sm my-1">{profile.price}</p>
              <p className="text-gray-500 text-sm my-1">{profile.image}</p>
            </div>
          ) : null}

          {!loaded && (
            <>
              <button
                onClick={connect}
                className="pt-4 shadow-md bg-purple-800 mt-4 mb-2 text-white font-bold py-2 px-4 rounded"
              >
                Authenticate
              </button>

              <button
                className="pt-4 shadow-md bg-blue-500 mb-2 text-white font-bold py-2 px-4 rounded"
                onClick={readProfile}
              >
                Read Profile
              </button>
            </>
          )}
          {loaded && showGreeting && (
            <p className="my-4 font-bold text-center">
              You have no profile yet. Please create one!
            </p>
          )}
          {loaded && (
            <>
              <div className="registerHost__input">
                <TextField
                  id="outlined-basic"
                  label="Location"
                  onChange={(e) => setLocation(e.target.value)}
                  variant="outlined"
                />

                <TextField
                  id="outlined-basic"
                  label="Title"
                  onChange={(e) => setTitle(e.target.value)}
                  variant="outlined"
                />

                <TextField
                  id="outlined-basic"
                  label="Name"
                  onChange={(e) => setName(e.target.value)}
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Image"
                  onChange={(e) => setImage(e.target.value)}
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Price"
                  onChange={(e) => setPrice(e.target.value)}
                  variant="outlined"
                />
              </div>
              <div className="registerHost__bottom">
                <button
                  className="pt-4 shadow-md bg-green-500 mt-2 mb-2 text-white font-bold py-2 px-4 rounded"
                  onClick={updateProfile}
                >
                  Update
                </button>
                <button
                  className="pt-4 shadow-md bg-blue-500 mb-2 text-white font-bold py-2 px-4 rounded"
                  onClick={readProfile}
                >
                  View Listings
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default RegisterHost;
