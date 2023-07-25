import { useState, ChangeEvent, FormEvent } from "react";
import { FaPaintBrush, LuCopy, HiOutlineCheckCircle } from "../icons";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { AppLogo } from ".";
// import { toast } from "react-hot-toast/headless";

export default function JoinForm() {
  const [username, setUsername] = useState("");
  const [roomName, setRoomName] = useState("");
  const [roomId, setRoomId] = useState("");
  const [copied, setCopied] = useState(false);

  const navigate = useNavigate();

  const data = {
    roomId: roomId,
    roomName: roomName,
    username: username,
  };

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleRoomNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRoomName(event.target.value);
  };

  const handleRoomIdChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRoomId(event.target.value);
  };

  const handleGenerateRoomId = () => {
    let id = uuidv4();
    setRoomId(id);
    toast.success("RoomId Generated");
  };

  const handleCopyText = () => {
    if (roomId.length >= 9) {
      navigator.clipboard.writeText(roomId);
      setCopied(true);
      toast.success("RoomId Copied");

      setTimeout(() => {
        setCopied(false);
        setRoomId("");
      }, 2500);
    } else if (roomId.length == 0) {
      toast.error("Generate a Room ID first");
    } else {
      toast.error("Room ID must be of 9 characters at least");
    }
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log({ username: username, roomId: roomId });
    if (username.length == 0) {
      toast.error("Please ! Enter a username");
    } else if (username.length < 2) {
      toast.error("Username must be of 2 or more characters");
    } else if (roomName.length == 0) {
      toast.error("Please ! Enter a room name");
    } else if (roomName.length < 2) {
      toast.error("Room name must be of 2 or more characters");
    } else if (roomId.length === 0) {
      toast.error("Please! Enter a room ID or generate one.");
    } else if (roomId.length < 9) {
      toast.error("RoomId must contain 9 characters at least");
    } else {
      navigate(`/${roomId}`, { state: data });
    }
  };

  return (
    <div className="flex-col w-full md:w-[32rem] flex items-center justify-center gap-3 px-4 md:px-6 py-7 rounded-lg border-2 border-zinc-400 border-opacity-40">
      <Toaster position="top-center" reverseOrder={false} />
      <form onSubmit={handleFormSubmit} className="space-y-3 w-full">
        <div className="mb-3">
          <AppLogo className="text-2xl" />
          <p className="text-sm text-zinc-400">
            Collaborate with others play with friends and have fun.
          </p>
        </div>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          className="formInputStyle"
          placeholder="Enter Your Username"
        />
        <input
          type="text"
          value={roomName}
          onChange={handleRoomNameChange}
          maxLength={20}
          className="formInputStyle"
          placeholder="Enter Your Room Name"
        />
        <div className="relative">
          <input
            type="text"
            value={roomId}
            className="formInputStyle"
            onChange={handleRoomIdChange}
            placeholder="Enter your RoomId"
          />
          <button
            type="button"
            className="top-3 absolute right-2 text-base"
            onClick={handleCopyText}
          >
            {copied ? <HiOutlineCheckCircle className="text-lg" /> : <LuCopy />}
          </button>
        </div>
        <button
          className="bg-zinc-800 w-full py-3 rounded-md text-zinc-50 text-sm font-medium hover:bg-zinc-900 transition-all"
          type="submit"
        >
          Join Room
        </button>
      </form>
      <span className="text-zinc-500 select-none">OR</span>
      <div className="w-full">
        <button
          type="button"
          className="w-full py-3 rounded-md text-sm font-medium hover:border-opacity-80 border-opacity-40 border-2 border-zinc-400 transition-all bg-zinc-100"
          onClick={handleGenerateRoomId}
        >
          Generate A RoomID
        </button>
      </div>
    </div>
  );
}
