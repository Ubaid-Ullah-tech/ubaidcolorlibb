import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/outline"; // Using Heroicons for the video icon

export function VideoDialog() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      {/* Button with video icon to open the dialog */}
      <Button onClick={handleOpen} variant="gradient" className="flex items-center">
        <PlayIcon className="w-5 h-5 mr-2" />
        WATCH THE VEDIO
      </Button>

      {/* Dialog that contains the video */}
      <Dialog open={open} handler={handleOpen} size="lg">
        <DialogHeader>Video Player</DialogHeader>
        <DialogBody className="flex justify-center">
        <video className="h-full w-full rounded-lg" controls autoPlay>
      <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default VideoDialog;
