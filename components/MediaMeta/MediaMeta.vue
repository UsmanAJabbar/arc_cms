<template>
  <Modal id="mediameta-modal">
    <div class="mediameta-container">
      <div class="media-preview">
        <img
          src="https://images.unsplash.com/photo-1683000789824-b7529dcb26a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2487&q=80"
        />
      </div>
      <div class="meta-info">
        <div class="header">
          <div class="close-icon-container" @click="$emit('closeModal')">
            <div id="close-icon">
              <span class="line"></span>
              <span class="line"></span>
            </div>
          </div>
          <div id="info-icon">i</div>
          <h2 id="title">Media Info</h2>
        </div>
        <div class="content">
          <dl class="meta-field">
            <div class="meta-pair">
              <dt class="detail">File Name</dt>
              <dl class="value">{{ sampleImageMeta.fileName }}</dl>
            </div>
            <div class="meta-pair">
              <dt class="detail">Resolution</dt>
              <dl class="value">
                {{ sampleImageMeta.resolution }} (Approx
                {{ sampleImageMeta.bytes }})
              </dl>
            </div>
            <div class="meta-pair">
              <dt class="detail">Date Uploaded</dt>
              <dl class="value">{{ sampleImageMeta.dateUploaded }}</dl>
            </div>
            <div class="meta-pair">
              <dt class="detail">Owner</dt>
              <dl class="value">{{ sampleImageMeta.owner }}</dl>
            </div>
            <div class="meta-pair">
              <dt class="detail">Additional Metadata</dt>
              <dl class="exif-data">
                <pre>{{ JSON.stringify(sampleImageMeta, null, 2) }}</pre>
              </dl>
            </div>
          </dl>
        </div>
        <div class="footer">
          <Button> <i class="ri-delete-bin-line"></i>Delete</Button>
          <Button>Close</Button>
        </div>
      </div>
    </div>
  </Modal>
</template>
<script setup lang="ts">
defineProps({
  src: String,
});
const sampleImageMeta = {
  fileName: 'filename.jpg',
  resolution: '8456 x 1234',
  bytes: '8.2MB',
  dateUploaded: 'July 31st, 2022 (Thursday)',
  owner: 'John Wick',
  metadata: {},
};
</script>
<style lang="sass" scoped>
.mediameta-container
  width: 1200px
  aspect-ratio: 9 / 6
  border-radius: 2rem
  display: flex
  background-color: white
  overflow: hidden

  .media-preview
    width: 70%

    > img
      width: 100%
      height: 100%
      object-fit: cover

  .meta-info
    width: 30%
    padding: 2rem
    display: flex
    flex-direction: column

    .header
      #info-icon
        width: 2rem
        height: 2rem
        font-size: 1.5rem
        font-weight: 400
        border: solid 2px black
        border-radius: 100rem
        display: flex
        align-items: center
        justify-content: center
        user-select: none
      #close-icon
        cursor: pointer
        width: 2rem
        aspect-ratio: 1/1
        display: flex
        align-items: center
        justify-content: center
        flex-direction: column
        margin-left: auto
        .line
          width: 1.5rem
          background-color: black
          height: 0.1rem
          position: absolute
          &:first-child
            transform: rotate(45deg)
          &:last-child
            transform: rotate(-45deg)

      #title
        margin: 0.5rem 0
        font-size: 3rem
        font-weight: 500

    .content
      .meta-field
        display: flex
        flex-direction: column
        gap: 1rem
        margin: 0.5rem 0
        .meta-pair
          display: flex
          flex-direction: column
          gap: 0.4rem
          .detail
            font-weight: 700
            font-size: 1rem
          .value
            font-weight: 400
            font-size: 1.25rem
          .exif-data
            border-radius: 1rem
            background-color: #E0E0E0
            padding: 1rem

            pre
              font-size: 0.75rem
              white-space: pre-wrap

    .footer
      margin-top: auto
      display: flex
      gap: 1rem
</style>
