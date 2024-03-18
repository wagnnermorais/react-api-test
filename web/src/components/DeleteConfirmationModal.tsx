import { DeleteConfirmationModalProps } from "../types/DeleteConfirmationModal";

const DeleteConfirmationModal = ({
  onClick,
  onClose,
}: DeleteConfirmationModalProps) => {
  return (
    <div className="fixed inset-0 w-full h-full mx-auto flex items-center justify-center z-50">
      <div className="bg-black bg-opacity-70 absolute inset-0"></div>
      <div className="relative bg-white text-black w-[25%] h-[25%] overflow-auto rounded-md">
        <div className="p-8">
          <p className="text-2xl font-bold mb-4">
            Are you sure you want to delete this movie?
          </p>
          <div className="flex items-center justify-center gap-8">
            <button
              onClick={onClick}
              className="w-[10rem] p-2 rounded mt-4 bg-red-500 hover:bg-red-600 text-white font-bold duration-300"
            >
              Yes, delete
            </button>
            <button
              onClick={onClose}
              className="w-[10rem] p-2 rounded mt-4 font-bold bg-zinc-950 text-white cursor-pointer duration-300 hover:bg-opacity-90"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
