export default () => {
    const sendPost = (formData) => {
        const form = new FormData();

        form.append('text', formData.text);

        formData.mediaFiles.forEach((mediaFile, index) => {
            form.append('media_file_' + index, mediaFile);
        });

        return useFetchApi('/api/user/posts', {
            method: 'POST',
            body: form
        })
    };

    const getHomePosts = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await useFetchApi('/api/posts', {
                    method: 'GET',
                });

                resolve(response);
            } catch (error) {
                reject(error);
            }
        });
    };

    return {
        sendPost,
        getHomePosts
    };
}