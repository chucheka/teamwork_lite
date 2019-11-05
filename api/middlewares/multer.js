import multer from 'multer';

const uploads = multer({
	storage: multer.diskStorage({}),
	fileFilter: (req, file, cb) => {
		if (!file.mimetype.match(/gif$/i)) {
			cb({ message: 'You can only upload gifs' }, false);
			return;
		}
		cb(null, true);
	}
});

export default uploads;
