import { useFormik, Formik, Form, Field } from "formik";

import {
  FormErrorMessage,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Heading,
  Box,
  Image,
  Text,
  Textarea,
  Divider,
  Stack,
} from "@chakra-ui/react";
import User from "../../public/Icons/User Profile.svg";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import "@fontsource/lato";
import * as Yup from "yup";
import { CustomInputForm } from "../Custom/CustomInputGroup";

interface FormData {
  fullName: string;
  username: string;
  bio: string;
  facebook: string;
  twitter: string;
}

const UpdateProfilePage: React.FC = () => {
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full name is required"),
    username: Yup.string()
      .required("Username is required")
      .matches(
        /^[a-zA-Z0-9_]*$/,
        "Username can only contain letters, numbers, and underscores"
      ),

    // facebook: Yup.string().url("Please enter a valid Facebook URL"),

    // twitter: Yup.string().url("Please enter a valid twitter url"),
  });

  const handleSubmit = (values: FormData) => {
    console.log(values);
  };

  const formik = useFormik<FormData>({
    initialValues: {
      fullName: "",
      username: "",
      bio: "",
      facebook: "",
      twitter: "",
    },

    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });
  return (
    <>
      <Flex
        alignItems="Flex-start"
        justifyContent="center"
        flexDirection="column"
      >
        <Header />
      </Flex>

      <Box position="relative" height="350px">
        <Image src="/Images/pic.png" alt="Galaxy"></Image>
        <Flex
          position="absolute"
          top="73%"
          left="46%"
          zIndex="1"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <User />
          <Heading
            fontSize="20px"
            mt="23px"
            color="#FFFFFF"
            fontWeight="400"
            style={{ fontFamily: "lato" }}
          >
            Update Your Profile
          </Heading>
        </Flex>
      </Box>

      <Stack direction="column" p={35}>
        <Text
          fontSize="20px"
          mb="33px"
          color="#FFFFFF"
          fontWeight="300"
          style={{ fontFamily: "lato" }}
        >
          user profile information
        </Text>

        <Divider borderColor="  rgba(167, 167, 167, 0.4)" />
      </Stack>
      <form onSubmit={formik.handleSubmit}>
        <Flex
          flexWrap="wrap"
          gap="33px"
          justifyContent="space-between"
          padding="20px 10%"
        >
          {/* <FormControl
            id="fullName"
            isInvalid={!!formik.errors.fullName && formik.touched.fullName}
            width="35%"
          >
            <FormLabel style={{ fontFamily: "lato" }} color="#FFFFFF">
              Full Name
            </FormLabel>
            <Input
              type="text"
              {...formik.getFieldProps("fullName")}
              placeholder="Full Name"
              onChange={formik.handleChange}
              color="#FFFFFF"
              _focusVisible={{ borderColor: "#A7A7A7" }}
            />
            <FormErrorMessage>{formik.errors.fullName}</FormErrorMessage>
          </FormControl> */}
          <CustomInputForm
            id="fullName"
            label="Full Name"
            onChange={formik.handleChange}
            placeholder="Full Name"
            rest={formik.getFieldProps("fullName")}
            isInvalid={!!formik.errors.fullName && formik.touched.fullName}
            errorMsg={formik.errors.fullName}
          />
          {/* <FormControl
            id="username"
            isInvalid={!!formik.errors.username && formik.touched.username}
            width="35%"
          >
            <FormLabel style={{ fontFamily: "lato" }} color="#FFFFFF">
              Username
            </FormLabel>

            <Input
              type="text"
              {...formik.getFieldProps("username")}
              placeholder="Username"
              onChange={formik.handleChange}
              color="#FFFFFF"
              _focusVisible={{ borderColor: "#A7A7A7" }}
            />
            <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
          </FormControl> */}
          <CustomInputForm
            id="username"
            label="Username"
            onChange={formik.handleChange}
            placeholder="username"
            rest={formik.getFieldProps("username")}
            isInvalid={!!formik.errors.username && formik.touched.username}
            errorMsg={formik.errors.username}
          />
          {/* <FormControl
            id="Link"
            isInvalid={!!formik.errors.facebook && formik.touched.facebook}
            width="35%"
          >
            <FormLabel
              style={{ fontFamily: "lato" }}
              htmlFor="Facebook"
              color="#FFFFFF"
            >
              Facebook
            </FormLabel>
            <Input
              type="text"
              color="#FFFFFF"
              {...formik.getFieldProps("Link")}
              placeholder="www.facebook.com/MayurKalia"
              onChange={formik.handleChange}
              _focusVisible={{ borderColor: "#A7A7A7" }}
            />
            <FormErrorMessage>{formik.errors.facebook}</FormErrorMessage>
          </FormControl> */}
          <CustomInputForm
            id="facebook"
            label="Facebook"
            onChange={formik.handleChange}
            placeholder="www.facebook.com/MayurKalia"
            rest={formik.getFieldProps("facebook")}
            isInvalid={!!formik.errors.facebook && formik.touched.facebook}
            errorMsg={formik.errors.facebook}
          />
          {/* <FormControl
            id="LinkT"
            isInvalid={!!formik.errors.twitter && formik.touched.twitter}
            width="35%"
          >
            <FormLabel
              style={{ fontFamily: "lato" }}
              htmlFor="Twitter"
              color="#FFFFFF"
            >
              Twitter
            </FormLabel>
            <Input
              type="text"
              color="#FFFFFF"
              {...formik.getFieldProps("LinkT")}
              placeholder="www.twitter.com/MayurKalia"
              onChange={formik.handleChange}
              _focusVisible={{ borderColor: "#A7A7A7" }}
            />
            <FormErrorMessage>{formik.errors.twitter}</FormErrorMessage>
          </FormControl> */}
          <CustomInputForm
            id="twitter"
            label="Twitter"
            onChange={formik.handleChange}
            placeholder="www.twitter.com/MayurKalia"
            rest={formik.getFieldProps("twitter")}
            isInvalid={!!formik.errors.twitter && formik.touched.twitter}
            errorMsg={formik.errors.twitter}
          />
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <FormControl
              // display="flex"
              isInvalid={formik.touched.bio && !!formik.errors.bio}
              // width="750px"
              alignItems="flex-start"
            >
              <FormLabel
                style={{ fontFamily: "lato" }}
                htmlFor="bio"
                color="#FFFFFF"
              >
                Bio
              </FormLabel>
              <Textarea
                id="bio"
                name="bio"
                value={formik.values.bio}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                color="#FFFFFF"
                _focusVisible={{ borderColor: "#A7A7A7" }}
                height="143px"
                width="100%"
              />
            </FormControl>

            <Button
              type="submit"
              background="rgba(173, 26, 175, 1)"
              border="1px solid #F81DFB"
              color="#FFFFFF"
              style={{ fontFamily: "lato" }}
              alignSelf="flex-end"
              mt="33px"
              mr="8"
            >
              Update Profile
            </Button>
          </Box>
        </Flex>
      </form>
      <Footer />
    </>
  );
};
// }
export default UpdateProfilePage;
