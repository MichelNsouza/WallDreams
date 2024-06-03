<template>
    <div>
      
      <form @submit.prevent="uploadWallpaper" class="mt-5 p-5 border border-success">
        <h1>Upload Wallpaper</h1>
        <div>
          <label  class="form-label" for="title">Title:</label>
          <input class="form-control" type="text" id="title" v-model="title" required>
        </div>
        <div>
          <label class="form-label" for="description">Description:</label>
          <input class="form-control" type="text" id="description" v-model="description" required>
        </div>
        <div>
          <label class="form-label" for="category">Category:</label>
          <input class="form-control" type="text" id="category" v-model="category" required>
        </div>
        <div>
          <label class="form-label" for="file">File:</label>
          <input class="form-control" type="file" id="file" @change="onFileChange" required>
        </div>
        <button type="submit">Upload Wallpaper</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
 import {
    createWallpaper
} from '@/services/api';

  export default {
    name: 'UploadWallpaper',
    setup() {
      const title = ref('');
      const description = ref('');
      const category = ref('');
      const file = ref(null);
  
      const onFileChange = (e) => {
        file.value = e.target.files[0];
      };
  
      const uploadWallpaper = async () => {
        try {
          const formData = new FormData();
          formData.append('title', title.value);
          formData.append('description', description.value);
          formData.append('category', category.value);
          formData.append('file', file.value);
  
          const response = await createWallpaper(formData);
  
          if (response.status === 200) {
            console.log('Wallpaper Criado:', response.data);
          } else {
            console.error('Falha ao criar wallpaper:', response.statusText);
          }
        } catch (error) {
          console.error('Error ao criar wallpaper:', error);
        }
      };
  
      return {
        title,
        description,
        category,
        file,
        onFileChange,
        uploadWallpaper
      };
    }
  };
  </script>
  
  <style scoped>
  /* Add some basic styling */
  form {
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  
  div {
    margin-bottom: 15px;
  }
  
  label {
    margin-bottom: 5px;
  }
  
  input[type="text"],
  input[type="file"] {
    padding: 8px;
    font-size: 16px;
  }
  
  button {
    padding: 10px 15px;
    font-size: 16px;
    cursor: pointer;
  }
  </style>
  