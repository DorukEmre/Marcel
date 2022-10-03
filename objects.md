
User
    userID (string)
    signUpDate (date)
    lastLoginDate (date)
    clusters
        clusterIDs (string)
    pictures - 
        picIDs (string)
    beauties -
        picIDs (string)
    likes -
        picIDs (string)
    reports - 
        catIDs (string)
        picIDs (string)

Cat
    catID (string)
    cat_userID [owner]
    catName (string)
    totalBeauty (Number)(sum of its picBeauty)
    catReport (Number)
    totalReport (Number)(catReport + sum of its picReport)
    thumbnail (img)
    pictures -
        picIDs (string)

Post
    picID (string)
    pic_userID (string) [owner]
    pic_catID (string)
    picLocation (GPS)
    image (img)
    hidden (true/false)
    picBeauty -
        beautyCount (Number)
        userIDs (string)
    picLike -
        likeCount (Number)
        userIDs (string)
    picReport -
        reportCount (Number)
        reporter - 
            reporterID (string)
            reportDate (date)

Cluster
    clusterID (string)
    cluster_userID (string) [owner]
    creationDate (date)
    members -
        userIDs
        joinDate