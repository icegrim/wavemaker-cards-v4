<template>

    <EditorContent :editor="editor" class="descriptionEditor" />

</template>

<script>

//TODO : Clean the basic editor up
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'

const CustomTaskItem = TaskItem.extend({
    content: 'inline*',
})
export default {
    name: "DescriptionEditor",
    components: {
        EditorContent,
    },
    props: {
        modelValue: {
            type: String,
            default: '',
        }
    },

    data() {
        return {
            editor: null,
        }
    },

    watch: {
        modelValue(value) {
            // HTML
            const isSame = this.editor.getHTML() === value

            // JSON
            // const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(value)

            if (isSame) {
                return
            }

            this.editor.commands.setContent(value, false)
        },
    },

    mounted() {
        this.editor = new Editor({
            extensions: [
                StarterKit,
                TaskList,
                CustomTaskItem
            ],
            content: this.modelValue,
            onUpdate: () => {
                // HTML
                this.$emit('update:modelValue', this.editor.getHTML())
                this.$emit("updated")
                // JSON
                // this.$emit('update:modelValue', this.editor.getJSON())
            },
        })
    },

    beforeUnmount() {
        this.editor.destroy()
    },
}
</script>

<style scoped>

</style>


