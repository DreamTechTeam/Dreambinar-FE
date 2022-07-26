import DashboardLayout from "../../components/Dashboard/DasboardLayout";
import Head from "../../components/Head";
import { HiIdentification, HiMail, HiPencil } from "react-icons/hi";
import {
  Avatar,
  Button,
  FileInput,
  Label,
  Modal,
  Textarea,
  TextInput,
} from "flowbite-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaIdCard } from "react-icons/fa";

const Settings = () => {
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("dadang_steven");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const onSubmit2 = async (data) => {
    await console.log(data);
  };

  const onOpen = () => {
    setModal(true);
  };

  const onClose = () => {
    setModal(false);
  };

  useEffect(() => {
    setEmail("jese@gmail.com");
    setUsername("jese_leos");
  });

  return (
    <>
      <Head title="Settings" />

      <DashboardLayout>
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 bg-white rounded-lg">
          <div className="row-start-2 md:row-start-auto md:col-span-2 p-6 md:p-8 xl:p-10 border-r-0 md:border-r">
            <div className="h-fit md:hidden mb-6 pb-6 border-b border-dashed flex items-center justify-between">
              <Avatar
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              >
                <div className="space-y-1 font-medium dark:text-white">
                  <div>Jese Leos</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    jese@gmail.com
                  </div>
                </div>
              </Avatar>
              <div className="block md:hidden">
                <Button color="light" onClick={onOpen}>
                  <HiPencil className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-1">
              Profile Setting
            </h1>
            <p>
              Basic info, like your name and address, that you use on Nio
              Platform.
            </p>

            <div className="w-full flex items-center bg-slate-200 rounded-lg px-2 py-1 mt-6">
              <p className="text-slate-400 font-black font-sans text-sm">
                BASICS
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-6">
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Email Address" />
                </div>
                <TextInput
                  id="email"
                  type="email"
                  icon={HiMail}
                  value={email}
                  disabled={true}
                  readOnly={true}
                  onChange={() => setEmail(email)}
                />
              </div>

              <div className="mt-6">
                <div className="mb-2 block">
                  <Label htmlFor="username" value="Username" />
                </div>
                <TextInput
                  id="username"
                  type="text"
                  icon={HiIdentification}
                  value={username}
                  disabled={true}
                  readOnly={true}
                  onChange={() => setUsername(username)}
                />
              </div>

              <div className="mt-6">
                <div className="mb-2 block">
                  <Label htmlFor="fullName" value="Full Name" />
                </div>
                <TextInput
                  id="fullName"
                  type="text"
                  defaultValue="Jese Leos"
                  icon={FaIdCard}
                  {...register("fullName", { required: true })}
                />
                {errors.fullName && (
                  <p className="text-xs mt-1 text-red-800 font-bold">
                    * This field is required
                  </p>
                )}
              </div>

              <div id="textarea" className="mt-6">
                <div className="mb-2 block">
                  <Label htmlFor="bio" value="Bio" />
                </div>
                <Textarea
                  id="bio"
                  defaultValue="Your ormawa bio..."
                  required={true}
                  rows={4}
                  {...register("bio", { required: true })}
                />
                {errors.bio && (
                  <p className="text-xs mt-1 text-red-800 font-bold">
                    * This field is required
                  </p>
                )}
              </div>

              <div className="w-full mt-6 [&>button]:w-full md:[&>button]:w-fit">
                <Button type="submit">Update Profile</Button>
              </div>
            </form>
          </div>

          <div className="h-fit hidden md:block">
            <div className="p-6 md:p-8 xl:p-10 md:border-b flex items-center justify-between md:block xl:flex">
              <Avatar
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              >
                <div className="space-y-1 font-medium dark:text-white">
                  <div>Jese Leos</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    jese@gmail.com
                  </div>
                </div>
              </Avatar>
              <div className="block md:hidden xl:block">
                <Button color="light" onClick={onOpen}>
                  <HiPencil className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="p-6 md:p-8 xl:p-10 md:border-b xl:hidden">
              <div className="w-full [&>button]:w-full">
                <Button color="light" onClick={onOpen}>
                  Change Picture <HiPencil className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Modal
          show={modal}
          size="md"
          position="center"
          popup={true}
          onClose={onClose}
        >
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <form onSubmit={handleSubmit2(onSubmit2)}>
                <div id="fileUpload" className="mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="file" value="Upload Profile Picture" />
                  </div>
                  <FileInput
                    accept="image/*"
                    id="file"
                    helperText="Upload photo file to change your profile pictures"
                    {...register2("pictures", { required: true })}
                  />
                  {errors2.pictures && (
                    <p className="text-xs mt-1 text-red-800 font-bold">
                      * This field is required
                    </p>
                  )}
                </div>
                <Button type="submit">Change Profile Picture</Button>
              </form>
            </div>
          </Modal.Body>
        </Modal>
      </DashboardLayout>
    </>
  );
};

export default Settings;
