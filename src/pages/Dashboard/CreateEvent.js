import {
  Button,
  FileInput,
  Label,
  TextInput,
  ToggleSwitch,
} from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import DashboardLayout from "../../components/Dashboard/DasboardLayout";
import Head from "../../components/Head";
import { Editor } from "@tinymce/tinymce-react";

const CreateEvent = () => {
  const [selectedImage, setSelectedImage] = useState();
  const [isDraft, setIsDraft] = useState(true);
  const [isOnline, setIsOnline] = useState(null);
  const [isPaid, setIsPaid] = useState(null);
  const [dateTimeStart, setDateTimeStart] = useState(null);
  const [dateTimeEnd, setDateTimeEnd] = useState(null);
  const [dateTimeWarningMsg, setDateTimeWarningMsg] = useState();

  const editorRef = useRef(null);

  const onImageChange = ({ target }) => {
    if (target.files && target.files.length > 0) {
      setSelectedImage(target.files[0]);
    }
  };

  useEffect(() => {
    if (
      dateTimeStart &&
      dateTimeEnd &&
      new Date(dateTimeStart).getTime() > new Date(dateTimeEnd).getTime()
    ) {
      return setDateTimeWarningMsg("Date start cannot over than date end");
    }
    
    setDateTimeWarningMsg("");
  }, [dateTimeStart, dateTimeEnd]);

  return (
    <>
      <Head title="My Events" />

      <DashboardLayout>
        <form>
          <div className="bg-white md:col-span-2 pt-10 pb-5 md:px-8 xl:px-10 border-b">
            <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-1">
              Create your event
            </h1>
            <p>
              Create Event, like your name and address, that you use on Nio
              Platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 bg-white rounded-lg">
            <div className="row-start-2 md:row-start-auto md:col-span-2 p-6 md:p-8 xl:p-10 border-r-0 md:border-r">
              <div className="mb-6">
                <div className="mb-2 block">
                  <Label htmlFor="title" value="Title" />
                </div>
                <TextInput
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Enter your event title"
                  required={true}
                />
              </div>

              <div className="mb-6">
                <div className="mb-2 block">
                  <Label htmlFor="file" value="Upload file" />
                </div>
                <FileInput
                  accept="image/*"
                  id="file"
                  helperText="Event photos are useful in giving a first impression of the event being held"
                  onChange={onImageChange}
                />
                <div className="mt-3">
                  <img
                    className="max-h-72 w-100 object-fit rounded"
                    src={
                      !selectedImage
                        ? "https://via.placeholder.com/670x400"
                        : URL.createObjectURL(selectedImage)
                    }
                    alt=""
                  />
                </div>
              </div>

              <div className="mb-6">
                <div className="mb-2 block">
                  <Label htmlFor="fullName" value="Full name" />
                </div>
                <Editor
                  apiKey="d0f6n370g3zgqhw70k3x57vfl92plvqpqybcqjx5p3xavo7k"
                  onInit={(e, editor) => (editorRef.current = editor)}
                  initialValue="<p>This is the initial content of the editor.</p>"
                  init={{
                    menubar: "file edit", // available: file edit view format
                    plugins: [
                      "advlist autolink lists link image charmap print preview anchor",
                      "searchreplace visualblocks code fullscreen",
                      "insertdatetime media table paste code",
                    ],
                    toolbar:
                      "undo redo | formatselect bullist numlist | bold italic underline strikethrough language | removeformat",
                    branding: false,
                  }}
                  id="description"
                />
              </div>

              <div className="mb-6">
                <div className="mb-2 block">
                  <Label htmlFor="eventType" value="Event type" />
                </div>

                <select
                  id="isOnline"
                  name="isOnline"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={({ target }) => setIsOnline(target.value)}
                >
                  <option value="">Choose a type</option>
                  <option value={true}>Online</option>
                  <option value={false}>Offline</option>
                </select>
              </div>
              {isOnline === "false" && (
                <div className="mb-6">
                  <div className="mb-2 block">
                    <Label htmlFor="location" value="Location" />
                  </div>

                  <TextInput
                    id="location"
                    name="location"
                    placeholder="Enter event location"
                  />
                </div>
              )}

              <div className="mb-6">
                <div className="mb-2 block">
                  <Label htmlFor="eventPrice" value="Event price" />
                </div>

                <select
                  id="eventPrice"
                  name="eventPrice"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={({ target }) => setIsPaid(target.value)}
                >
                  <option value="">Choose a type</option>
                  <option value={true}>Paid</option>
                  <option value={false}>Free</option>
                </select>
              </div>
              {isPaid === "true" && (
                <>
                  <div className="mb-6">
                    <div className="mb-2 block">
                      <Label htmlFor="nominalPrice" value="Nominal Price" />
                    </div>

                    <TextInput
                      id="nominalPrice"
                      name="nominalPrice"
                      type="number"
                    />
                  </div>

                  <div className="mb-6">
                    <div className="mb-2 block">
                      <Label htmlFor="priceType" value="Price type" />
                    </div>

                    <select
                      id="priceType"
                      name="priceType"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="">Choose a price type</option>
                      <option value="person">Person</option>
                      <option value="team">Team</option>
                    </select>
                  </div>
                </>
              )}
            </div>

            <div className="h-fit hidden md:block">
              <div className="p-6 md:p-8 xl:p-10">
                <div className="mb-6">
                  <div className="mb-2 block">
                    <Label htmlFor="dateTimeStart" value="Event start" />
                  </div>

                  <TextInput
                    type="datetime-local"
                    id="dateTimeStart"
                    name="dateTimeStart"
                    onChange={({ target }) => setDateTimeStart(target.value)}
                  />
                </div>

                <div className="mb-6">
                  <div className="mb-2 block">
                    <Label htmlFor="dateTimeEnd" value="Event end" />
                  </div>

                  <TextInput
                    type="datetime-local"
                    id="dateTimeEnd"
                    name="dateTimeEnd"
                    onChange={({ target }) => setDateTimeEnd(target.value)}
                  />
                </div>

                {dateTimeWarningMsg}

                <div className="mb-6">
                  <div className="flex">
                    <ToggleSwitch
                      checked={isDraft}
                      onChange={() => setIsDraft(!isDraft)}
                    />
                    <span>
                      {isDraft ? "Save as Draft" : "Request Publication"}
                    </span>
                  </div>
                </div>

                <div className="w-full [&>button]:w-full md:[&>button]:w-fit">
                  <Button>Save Event</Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </DashboardLayout>
    </>
  );
};

export default CreateEvent;
