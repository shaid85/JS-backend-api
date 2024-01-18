import {Router} from 'express';
import { registerUser,loginUser,logoutUser,refreshAccessToken,updatePassword,updateUserAvatar,updateUserCoverImage,updateUserDetails,getCurrentUser, getUserChannelProfile, getWatchHistory } from '../controllers/user.controller.js';
import {upload} from '../middlewares/multer.middleware.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';


const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
    )
router.route("/login").post(loginUser)    
// secured routes
router.route("/logout").post(verifyJWT, logoutUser)
router.route("/updatepassword").post(verifyJWT, updatePassword)
router.route("/updatuser").patch(verifyJWT, updateUserDetails)
router.route("/currentuser").get(verifyJWT, getCurrentUser)

router.route("/updateavatar").patch(verifyJWT, upload.single("avatar"), updateUserAvatar)
router.route("/updatecover").patch(verifyJWT, upload.single("coverImage"), updateUserCoverImage)

router.route("/c/:username").get(verifyJWT, getUserChannelProfile)
router.route("/history").get(verifyJWT, getWatchHistory)

router.route("/refresh-token").post(refreshAccessToken)


export default router