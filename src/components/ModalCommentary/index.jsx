import React from 'react';
import ColorButton from '../Button/Color';
import Text from '../Typography/Text';

function ModalCommentary(props) {
  // eslint-disable-next-line react/prop-types
  const { data } = props;

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <textarea
                id="text"
                className="border-2 border-gray-300 rounded-md w-full resize-none"
                rows={10}
                // eslint-disable-next-line react/prop-types
                value={data?.commentary}
                required
              />
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6">
              {/* Buttons */}
              <section className="flex flex-row justify-between">
                <ColorButton color="secondary">
                  <Text>Cancelar</Text>
                </ColorButton>

                <ColorButton color="blue" type="submit">
                  <Text>Confirmar</Text>
                </ColorButton>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ModalCommentary.defaultProps = {
  data: {
    commentary: '',
  },
};

export default ModalCommentary;
