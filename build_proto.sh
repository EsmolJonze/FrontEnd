protoc --proto_path=src --js_out=import_style=commonjs_strict,binary:src/js/misc src/proto/*

for filename in src/js/misc/proto/*; do
    sed -i '1i \/* eslint-disable *\/\n' $filename
done