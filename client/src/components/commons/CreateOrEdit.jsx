import React from 'react';
import { Modal, Button, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import Loading from '../commons/Loading';

const CreateOrEdit = ({
  modal, actions, loading, recipe, previewImage
}) => {
  const renderButton = () => {
    if (modal.recipeId) {
      return (
        <Button
          positive
          icon="checkmark"
          labelPosition="right"
          content="Update"
          onClick={() => {
            actions.updateRecipe(modal.recipeId);
          }}
        />
      );
    }
    return (
      <Button
        positive
        icon="checkmark"
        labelPosition="right"
        content="Save"
        onClick={() => {
          actions.saveRecipe();
        }}
      />
    );
  };

  const showHeading = () => {
    if (modal.recipeId) {
      return 'Edit ';
    }
    return 'Create ';
  };

  const renderForm = () => (
    <Form
      loading={loading}
    >
      <div style={{ display: 'flex', flexWrap: 'wrap', padding: '10px' }}>
        <div style={{ marginRight: '20px' }}>
          <span><strong>Recipe Image</strong></span>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              marginBottom: '20px',
              flexBasis: '0 0'
            }}
          >
            <img
              src={previewImage || ''}
              alt=""
              height="300px"
              style={{ border: '2px solid gray' }}
            />
          </div>
          <Form.Input
            disabled={loading}
            name="imageUrl"
            label="Choose new image (Max Size: 200kb)"
            type="file"
            accept="image/*"
            onChange={(event) => {
              actions.handleImageChange(event);
            }}
          />
        </div>
        <div style={{ flexGrow: '1' }}>
          <Form.Input
            required
            disabled={loading}
            label="Recipe Name"
            placeholder="Enter recipe name"
            value={recipe.name}
            onChange={(event) => {
              actions.storeToState('name', event.target.value);
            }}
          />
          <Form.Input
            disabled={loading}
            label="Recipe Description"
            placeholder="Enter a short description"
            value={recipe.description}
            onChange={(event) => {
              actions.storeToState('description', event.target.value);
            }}
          />
          <Form.TextArea
            required
            disabled={loading}
            label="Ingredients"
            style={{ height: '235px' }}
            placeholder="Enter ingredient list separated by comma"
            value={
              recipe.ingredients ? recipe.ingredients.replace(/;;/g, ',') : ''
            }
            onChange={(event) => {
              actions.storeToState('ingredients', event.target.value);
            }}
          />
        </div>
      </div>
      <Form.TextArea
        required
        disabled={loading}
        style={{ height: '235px' }}
        label="Preparation Procedure"
        placeholder="Enter recipe preparation procedure"
        value={recipe.procedure}
        onChange={(event) => {
          actions.storeToState('procedure', event.target.value);
        }}
      />
    </Form>
  );

  return (
    <Modal open={modal.type === 'create_edit_recipe'}>
      <Modal.Header>
        {`${showHeading()} a Recipe`}
      </Modal.Header>
      <Modal.Content>
        {loading ? <Loading text={modal.recipeName} /> : renderForm()}
      </Modal.Content>
      <Modal.Actions>
        <Button
          negative
          icon="close"
          labelPosition="right"
          content="Cancel"
          onClick={() => {
            actions.removeModal();
          }}
        />
        {renderButton()}
      </Modal.Actions>
    </Modal>
  );
};

CreateOrEdit.propTypes = {
  modal: PropTypes.shape().isRequired,
  actions: PropTypes.shape().isRequired,
  loading: PropTypes.bool.isRequired,
  recipe: PropTypes.shape().isRequired,
  previewImage: PropTypes.string.isRequired
};

export default CreateOrEdit;